import cors from "cors";
import express, { Application, Request, Response } from "express";
import { ProductRoute } from "./app/modules/products/product.route";


const app:Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes 

app.use("/api/products", ProductRoute);


const getController = (req: Request, res: Response) => {
  res.send("server is running");
};

app.get("/", getController);

export default app;
