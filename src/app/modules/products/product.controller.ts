import { Request, Response } from "express";
import { ProductService } from "./product.service";


// create product -------------------------------

export const createProduct = async (req: Request, res: Response) => {
   try{
     const product = req.body;
    const result = await ProductService.createProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
   }catch(err){
    res.status(400).json({
      success: false,
      message: "Failed to create product!",
      error: err,
    });
   }
}


// get all  product -------------------------------
export const getProduct = async (req: Request, res: Response) => {
   try{
    const result = await ProductService.getProductFromDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
   }catch(err){
    res.status(400).json({
      success: false,
      message: "Failed to fetched product!",
      error: err,
    });
   }
}

// get product by ID -------------------------------

export const getProductByID = async (req: Request, res: Response) => {
   try{
    const id = req.params.productId
    if(!id){
      res.status(400).json({
        success: false,
        message: "No ID is Provided!",
      });
    }
    const result = await ProductService.getProductByIDFromDB(id as string);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
   }catch(err){
    res.status(400).json({
      success: false,
      message: "Failed to fetch product!",
      error: err,
    });
   }
}

// update product by ID -------------------------------


export const updateProductByID = async (req: Request, res: Response) => {
   try{
    const id = req.params.productId;
    const product = req.body;
    if(!id){
      res.status(400).json({
        success: false,
        message: "NO ID is Provided!",
      });
    }
    if (!product) {
      res.status(400).json({
        success: false,
        message: "No data is Provided!",
      });
    }
    const result = await ProductService.updateProductByIDFromDB(
      id as string,
      product
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
   }catch(err){
    res.status(400).json({
      success: false,
      message: "Failed to update product!",
      error: err,
    });
   }
}

