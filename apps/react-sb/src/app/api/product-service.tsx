import axios from 'axios';
import { mockProductList } from '../mock/product-mock';
import { IProduct } from '../types/product';

export default class ProductService {
  static async getAll(): Promise<Array<IProduct>> {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((result: any) => {
        return mockProductList;
      });
  }

  static getById(id: number): Promise<IProduct | undefined> {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((result: any) => {
        return mockProductList.find((product) => product.id === id);
      });
  }
}
