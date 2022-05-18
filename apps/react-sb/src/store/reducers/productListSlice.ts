import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../app/types/product"
import { fetchProducts } from "./actionCreators";


interface IProductListState {
    products: IProduct[],
    isLoading: boolean,
    error: string,
}

const initialProductListState: IProductListState = {
    products: [],
    isLoading: false,
    error: ''
} 

export const productListSlice = createSlice({
    name: 'productList',
    initialState: initialProductListState,
    reducers: {
        productListFetching(state) {
            state.isLoading = true;
        },
        productListFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload;
        },
        productListFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
    extraReducers: {
        [fetchProducts.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) =>{
            state.isLoading = false;
            state.error = '';
            state.products = action.payload;
        },
        [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.products = [];
        }
    }
})

export default productListSlice.reducer;