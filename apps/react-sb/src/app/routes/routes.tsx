import Product from '../components/product/product';
import Users from '../components/users/user';
import { IRoute } from '../types/route';

export const routes: Array<IRoute> = [
  { path: 'users', exact: true, component: <Users /> },
  { path: 'product', exact: true, component: <Product /> },
];
