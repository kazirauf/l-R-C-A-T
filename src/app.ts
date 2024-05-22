import cors from "cors";
import express, { Application, Request, Response } from "express";
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

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "route not found",
  });
});




const getController = (req: Request, res: Response) => {
  res.send("server is running");
};

app.get("/", getController);

export default app;
