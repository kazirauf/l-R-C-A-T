import { ProductInterface } from "./product.interface";
import ProductModel from "./product.model";



// create product  post  method  -----------
const createProductIntoDB = async (product: ProductInterface) => {
  const result = await ProductModel.create(product);
  return result;
};

// get all product  get  method  -----------
const getProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// get  product by ID  get  method  -----------
const getProductByIDFromDB = async (id:string) => {
  const result = await ProductModel.findById(id);
  return result;
};

// update  product by ID  get  method  -----------
const updateProductByIDFromDB = async (id:string, product:ProductInterface) => {
  const result = await ProductModel.updateOne({_id : id}, product);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getProductFromDB,
  getProductByIDFromDB,
  updateProductByIDFromDB,
};

