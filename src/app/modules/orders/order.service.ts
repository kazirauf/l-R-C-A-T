import ProductModel from "../products/product.model";
import { ProductPurchase } from "./order.interface";
import OrderModel from "./order.model";

const createOrderIntoDB = async (order: ProductPurchase) => {
  const isExist = await ProductModel.findById(order.productId);
   if (!isExist) {
     throw new Error("Product not found!");
   } else {
     const updatedQuantity = isExist?.inventory?.quantity - order?.quantity;

     if (isExist.inventory.inStock && updatedQuantity >= 0) {
       const result = await OrderModel.create(order);
       await ProductModel.updateOne(
         { _id: order.productId },
         {
           "inventory.quantity": updatedQuantity,
           "inventory.inStock": updatedQuantity > 0,
         }
       );
       return result;
     } else {
       throw new Error("Insufficient quantity available in inventory");
     }
   }
 
};

export const OrderService = {
  createOrderIntoDB,
};
