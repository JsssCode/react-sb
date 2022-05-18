import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../app/api/product-service";
import { AppDispatch } from "../store";
import {productListSlice} from "./productListSlice";


// export const fetchProducts = () => async (dispatch: AppDispatch) =>    {
//     try {
//         dispatch(productListSlice.actions.productListFetching())
//         const response = await ProductService.getAll();
//         setTimeout(() => {
//             dispatch(productListSlice.actions.productListFetchingSuccess(response))
//         }, 1000);
     
//     } catch (e: any) {
//         dispatch(productListSlice.actions.productListFetchingError(e.message as string))
//     }
// }

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