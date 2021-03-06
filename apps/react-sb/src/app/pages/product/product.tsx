import React from 'react';
import { mockProduct } from '../../mock/product-mock';
import ProductList from './components/product-list/product-list';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProductDetails from './components/product-details/product-details';
import ProductList2 from './components/product-list/product-list2';
import ProductForm from './components/product-form/product-form';

const Product = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductLayout />}>
        <Route index element={
          <ProductList />
        } />
        <Route path="list" element={<ProductList />} />
        <Route path="/:productId" element={<ProductDetails />} />
        <Route path="create" element={<ProductForm />} />
        <Route path='/:productId/edit' element={<ProductForm />} />
      </Route>
    </Routes>
  );
};

export default Product;

const ProductLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
