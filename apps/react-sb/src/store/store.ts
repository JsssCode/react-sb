import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productApi } from "../app/api/product-service";
import productListReducer from "./reducers/productListSlice";
import productReducer from "./reducers/productSlice"

const rootReducer = combineReducers({
    productListReducer,
    [productApi.reducerPath]: productApi.reducer,
    productReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productApi.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']