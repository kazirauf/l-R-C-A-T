import { z } from "zod";

const OrderValidation = z.object({
  email: z.string().min(1, "Order email is required"),
  productId: z.string().min(1, "Order productId is required"),
  price: z.number().min(1, "Order price is required"),
  quantity: z.number().min(1, "quantity  is required"),
});

export { OrderValidation };
