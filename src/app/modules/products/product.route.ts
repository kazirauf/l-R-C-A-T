import express from 'express'
import { createProduct, getProduct, getProductByID, updateProductByID } from './product.controller';

const route = express.Router()


route.post("/", createProduct);
route.get("/", getProduct);
route.get("/:productId", getProductByID);
route.put("/:productId", updateProductByID);

export const ProductRoute = route