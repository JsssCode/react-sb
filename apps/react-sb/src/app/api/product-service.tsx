import axios from 'axios';
import { mockPriceHistory, mockProductList } from '../mock/product-mock';
import { IProduct } from '../types/product';
import { PriceHistoryEventType } from '../types/profile';

export default class ProductService {
  static async getAll(): Promise<Array<IProduct>> {
    return axios.get('https://dummyjson.com/products').then((result: any) => {
      return mockProductList;
    });
  }

  static getById(id: number): Promise<IProduct | undefined> {
    return axios.get('https://dummyjson.com/products').then((result: any) => {
      return mockProductList.find((product) => product.id === id);
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
