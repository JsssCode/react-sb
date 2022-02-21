import Product from '../pages/product/product';
import Users from '../pages/users/user';
import { IRoute } from '../types/route';

export const routes: Array<IRoute> = [
  { path: 'users', exact: true, component: <Users /> },
  { path: 'product/*', exact: true, component: <Product /> },
];
