import mongoose from "mongoose";
import { Inventory, ProductInterface, ProductVariant } from "./product.interface";
const { Schema } = mongoose;


const variantSchema = new Schema<ProductVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});
const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new mongoose.Schema<ProductInterface>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantSchema],
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

 const ProductModel = mongoose.model("Product", productSchema);

 export default ProductModel;