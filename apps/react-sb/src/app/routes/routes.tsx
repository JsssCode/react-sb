import Login from '../pages/login/login';
import Product from '../pages/product/product';
import Users from '../pages/users/user';
import { IRoute } from '../types/route';

export const privateRoutes: Array<IRoute> = [
  { path: 'users', exact: true, component: <Users /> },
  { path: 'product/*', exact: true, component: <Product /> },
];

export const publicRoutes: Array<IRoute> = [
  { path: 'login/*', exact: true, component: <Login /> },
]
