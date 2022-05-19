import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../app/api/product-service";
import { AppDispatch } from "../store";
import { productSlice } from "./productSlice";
import { IProduct } from "../../app/types/product";


export const getProduct = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.getProduct());
        const response = await ProductService.getById(parseInt(id, 10));
        dispatch(productSlice.actions.getProductSuccess(response));
    } catch (e: any) {
        dispatch(productSlice.actions.getProductError(e.message as string))
    }
}

export const updateProduct = (product: IProduct) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.updateProduct());
        const response = await ProductService.updateProduct(product);
        setTimeout(() => {
            dispatch(productSlice.actions.updateProductSuccess(response));
        }, 1000);
    
      
    } catch (e: any) {
        dispatch(productSlice.actions.updateProductError(e.message as string))
    }
}

export const createProduct = (product: Partial<IProduct>) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.createProduct());
        const response = await ProductService.createProduct(product);
        dispatch(productSlice.actions.createProductSuccess(response));
    } catch (e: any) {
        dispatch(productSlice.actions.createProductError(e.message as string))
    }   
}

export const fetchProducts = createAsyncThunk(
    'product/fetchAll',
    async(_, thunkApi) => {
        try {
            const response = await ProductService.getAll();
            return response; 
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message);
        }

    }
)