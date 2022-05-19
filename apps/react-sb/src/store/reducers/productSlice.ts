import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingType } from "../../app/types/loadingType";
import { IProduct } from "../../app/types/product";

interface IProductState {
    product: IProduct | null,
    loading: LoadingType,
    error: string,
    path?: string,
}

const initialProductState: IProductState  = {
    product: null,
    loading: LoadingType.NONE,
    error: '',
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {
        getProduct(state) {
            state.loading = LoadingType.LOAD;
        },
        getProductSuccess(state, action: PayloadAction<IProduct>) {
            state.loading = LoadingType.NONE;
            state.error = '';
            state.product = action.payload
            state.path = undefined;
        },
        getProductError(state, action: PayloadAction<string>) {
            state.loading = LoadingType.NONE;
            state.error = action.payload;
            state.path = undefined;
        },
        updateProduct(state) {
            state.loading = LoadingType.UPDATE;
            state.path = undefined;
        },
        updateProductSuccess(state, action: PayloadAction<IProduct>) {
            state.error = '';
            state.loading = LoadingType.NONE;
            state.product = action.payload;
            state.path = `/product/${action.payload.id}`;
        },
        updateProductError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = LoadingType.NONE;
            state.path = undefined;
        },
        createProduct(state) {
            state.loading = LoadingType.LOAD;
            state.path = undefined;
        },
        createProductSuccess(state, action: PayloadAction<IProduct>) {
            state.loading = LoadingType.NONE;
            state.product = action.payload;
            state.error = '';
            state.path = `/product/${action.payload.id}`;
        },
        createProductError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = LoadingType.NONE;
            state.path = undefined;
        }
    }
})

export default productSlice.reducer;