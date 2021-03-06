import ProductService from '../../../../api/product-service';
import { IProduct } from '../../../../types/product';
import React, { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductPreviewCard } from '../product-preview-card/product-preview-card';
import useFetching from '../../../../hooks/useRequest';
import Loader from '../../../../components/loader/loader';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchProducts } from '../../../../../store/reducers/actionCreators';

export enum ProductListVariants {
  LIST = 'LIST',
  PREVIEW = 'PREVIEW',
}

export interface IProductListProps {
  variant?: ProductListVariants;
}

const ProductList: FC<IProductListProps> = ({ variant }) => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(state => state.productListReducer)
  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  return (
    <div className="relative">
      {error && <h1>{error}</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={
            variant === ProductListVariants.PREVIEW
              ? 'flex overflow-x-auto'
              : 'flex flex-wrap'
          }
        >
          {products?.map((product) => (
            <Link
              className="m-2"
              key={`product${product.id}`}
              to={
                variant === ProductListVariants.PREVIEW
                  ? `../${product.id}`
                  : `${product.id}`
              }
            >
              <ProductPreviewCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
