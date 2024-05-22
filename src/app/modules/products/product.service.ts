import { ProductInterface } from "./product.interface";
import ProductModel from "./product.model";



// create product  post  method  -----------
const createProductIntoDB = async (product: ProductInterface) => {
  const result = await ProductModel.create(product);
  return result;
};

// get all product  get  method  -----------
const getProductFromDB = async (searchTerm:string) => {
  //eslint-disable-next-line
  const filter: any = {};
  if (searchTerm) {
    filter.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
      { category: { $regex: searchTerm, $options: "i" } },
      { tags: { $regex: searchTerm, $options: "i" } },
    ];
  }
  const result = await ProductModel.find(filter);
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
// delete  product by ID  get  method  -----------
const deleteProductByIDFromDB = async (id:string) => {
  const result = await ProductModel.deleteOne({_id : id});
  return result;
};
// delete  product by ID  get  method  -----------


export const ProductService = {
  createProductIntoDB,
  getProductFromDB,
  getProductByIDFromDB,
  updateProductByIDFromDB,
  deleteProductByIDFromDB,
};

