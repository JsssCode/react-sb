import { mockProductList } from '../mock/product-mock';
import { IProduct } from '../types/product';

export default class ProductService {
  static getAll(): Array<IProduct> {
    return mockProductList;
  }

  static getById(id: number): IProduct | undefined {
    return mockProductList.find((product) => product.id === id);
  }
}
