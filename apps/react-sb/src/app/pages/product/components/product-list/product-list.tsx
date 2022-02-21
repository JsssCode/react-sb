import ProductService from '../../../../api/product-service';
import { IProduct } from '../../../../types/product';
import React, { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductPreviewCard } from '../product-preview-card/product-preview-card';

export enum ProductListVariants {
  LIST = 'LIST',
  PREVIEW = 'PREVIEW',
}

export interface IProductListProps {
  variant?: ProductListVariants;
}

const ProductList: FC<IProductListProps> = ({ variant }) => {
  const [productList, setProductList] = useState<Array<IProduct>>([]);
  const params = useParams();

  useEffect(() => {
    fetchProductList(params['productId']);
  }, [params]);

  function fetchProductList(selectedProductId?: string) {
    const response = ProductService.getAll();
    if (selectedProductId) {
      setProductList(
        [...response].filter(
          (product) => product.id !== parseInt(selectedProductId, 10)
        )
      );
      return;
    }
    setProductList(response);
  }
  return (
    <div
      className={
        variant === ProductListVariants.PREVIEW
          ? 'flex overflow-x-auto'
          : 'flex flex-wrap'
      }
    >
      {productList.map((product) => (
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
  );
};

export default ProductList;
