import { Request, Response } from "express";
import { OrderValidation } from "./order.validation";
import { OrderService } from "./order.service";


export const OrderProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const value = OrderValidation.parse(product);
    const result = await OrderService.createOrderIntoDB(value);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: (err as Error).message,
    });
  }
};
export const Ordeoduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const value = OrderValidation.parse(product);
    const result = await OrderService.createOrderIntoDB(value);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: (err as Error).message,
    });
  }
};

