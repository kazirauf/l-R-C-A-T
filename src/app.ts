import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { ProductRoute } from "./app/modules/products/product.route";
import { OrderRoute } from "./app/modules/orders/order.route";


const app:Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes 


// product routes 
app.use("/api/products", ProductRoute);
// order routes 
app.use("/api/orders", OrderRoute);



const getController = (req: Request, res: Response) => {
  res.send("server is running");
};

app.get("/", getController);


// all route 

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({
    success: false,
    message: "Route not found",
  });
  next();
});

export default app;
