import express from "express";
import { OrderProduct, getOrderByEmaill } from "./order.controller";


const route = express.Router();

route.post("/", OrderProduct);
route.get("/", getOrderByEmaill);

export const OrderRoute = route;
