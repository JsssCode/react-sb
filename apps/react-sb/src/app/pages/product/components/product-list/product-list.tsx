import ProductService from '../../../../api/product-service';
import { IProduct } from '../../../../types/product';
import React, { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductPreviewCard } from '../product-preview-card/product-preview-card';
import useFetching from '../../../../hooks/useRequest';
import Loader from '../../../../components/loader/loader';

export enum ProductListVariants {
  LIST = 'LIST',
  PREVIEW = 'PREVIEW',
}

export interface IProductListProps {
  variant?: ProductListVariants;
}

const ProductList: FC<IProductListProps> = ({ variant }) => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [fetchProductList, isProductLoading, productError] = useFetching(
    async () => {
      const response = await ProductService.getAll();
      setProductList(response);
    }
  );
  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <div className="relative">
      {isProductLoading ? (
        <Loader />
      ) : (
        <div
          className={
            variant === ProductListVariants.PREVIEW
              ? 'flex overflow-x-auto'
              : 'flex flex-wrap'
          }
        >
          {productList?.map((product) => (
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
