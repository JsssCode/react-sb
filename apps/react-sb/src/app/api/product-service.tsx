import axios from 'axios';
import { mockPriceHistory, mockProductList } from '../mock/product-mock';
import { IProduct } from '../types/product';
import { PriceHistoryEventType } from '../types/profile';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle';

export default class ProductService {
  static async getAll(): Promise<Array<IProduct>> {
    return axios.get('http://localhost:5000/products').then((result: any) => {
      return result.data;
    });
  }

  static getById(id: number): Promise<IProduct | undefined> {
    return axios.get('http://localhost:5000/products/' + id).then((result: any) => {
      return result.data;
    });
  }

  static changeLikedState(product: IProduct): Promise<IProduct | undefined> {
    return axios.get('https://dummyjson.com/products').then((result: any) => {
      return {
        ...product,
        info: { ...product.info, isLiked: !product.info.isLiked },
        statistic: {
          ...product.statistic,
          like: product.statistic.like + (product.info.isLiked ? -1 : 1),
        },
      };
    });
  }

  static getProductById(id: number, neededType: Array<PriceHistoryEventType> = []): Promise<any> {
    return axios
      .get('https://dummyjson.com/products/' + id)
      .then((result: any) => {
        return mockPriceHistory.filter((item) => neededType?.length > 0 ? item.productId === id && neededType.includes(item.type) : item.productId === id);
      });
  }
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Product'],
  endpoints: (build) => ({
    fetchAllProduct: build.query<Array<IProduct>, number>({
      query: (limit = 5) => ({
        url: '/products',
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ['Product'],
    }),
    getProductById: build.query<IProduct, number>({
      query: (id: number) => ({
        url: `/products/${id}`
      }),
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),
    updateProduct: build.mutation<IProduct, IProduct>({
      query: (product: IProduct) => ({
        url: `/products/${product.id}`,
        method: 'PUT',
        body: product
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Product', id }],
    })
  })
})