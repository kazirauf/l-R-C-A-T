import express from "express";
import { OrderProduct } from "./order.controller";


const route = express.Router();

route.post("/", OrderProduct);
route.get("/", OrderProduct);

export const OrderRoute = route;
