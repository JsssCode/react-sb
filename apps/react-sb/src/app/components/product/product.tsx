import React from 'react';
import { mockProduct } from '../../mock/product-mock';
import ProductDetails from './components/product-details/product-details';

const Product = () => {
  return (
    <div>
      <ProductDetails product={mockProduct} />
    </div>
  );
};

export default Product;
