import ProfilePreview from '../../profile-preview/profile-preview';
import { Card } from 'primereact/card';
import React, { FC, useState } from 'react';
import { IProduct } from '../../../../../types/product';
import styles from '../product-details.module.scss';
import ProductTitleSection from '../../product-title/product-title';
import ProductStatistic from '../../product-statistic/product-statistic';
import ProductService from '../../../../../api/product-service';

interface IProductDescriptionProps {
  product: IProduct;
}

const ProductDescription: FC<IProductDescriptionProps> = ({ product }) => {
  const [productData, setProductData] = useState<IProduct>(product);

  const changeLikedState = async () => {
    const response = await ProductService.changeLikedState(productData);
    if (response) {
      setProductData(response);
    }
  };
  return (
    <div className={styles['card']}>
      <div className={styles['section']}>
        <ProductTitleSection
          product={productData}
          changeLikedState={changeLikedState}
          withActions={true}
        />
        <div className={styles['description']}>
          {productData.info.description}
        </div>
      </div>
      <div className="tag"></div>
      <div className={styles['section']}>
        <div className="person mt-5 flex">
          <ProfilePreview profile={productData.info.creator}></ProfilePreview>
          <ProfilePreview profile={productData.info.owner}></ProfilePreview>
        </div>
      </div>
      <div className={styles['section']}>
        <ProductStatistic statistic={productData.statistic} isPreview={false} />
      </div>
    </div>
  );
};

export default ProductDescription;
