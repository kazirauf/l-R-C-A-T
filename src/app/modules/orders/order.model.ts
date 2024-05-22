import mongoose, { Schema } from "mongoose";
import { ProductPurchase } from "./order.interface";

const productPurchaseSchema = new Schema<ProductPurchase>(
  {
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  
);
const OrderModel = mongoose.model("Orders", productPurchaseSchema);

export default OrderModel;