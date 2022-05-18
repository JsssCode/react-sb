import ProfilePreview from '../../profile-preview/profile-preview';

import React, { FC, useEffect, useState } from 'react';
import { IProduct } from '../../../../../types/product';
import styles from '../product-details.module.scss';
import ProductTitleSection from '../../product-title/product-title';
import ProductStatistic from '../../product-statistic/product-statistic';

interface IProductDescriptionProps {
  product: IProduct;
  handleLike?: (product: IProduct) => void;
}

const ProductDescription: FC<IProductDescriptionProps> = ({ product, handleLike }) => {

  const handleLikeClick = () => {
    handleLike && handleLike({
      ...product,
      info: { ...product.info, isLiked: !product.info.isLiked },
      statistic: {
        ...product.statistic,
        like: product.statistic.like + (product.info.isLiked ? -1 : 1)
      }
    });
  };
  return (
    <div className={styles['card']}>
      <div className={styles['section']}>
        <ProductTitleSection
          product={product}
          changeLikedState={handleLikeClick}
          withActions={true}
        />
        <div className={styles['description']}>
          {product.info.description}
        </div>
      </div>
      <div className="tag"></div>
      <div className={styles['section']}>
        <div className="person mt-5 flex">
          <ProfilePreview profile={product.info.creator}></ProfilePreview>
          <ProfilePreview profile={product.info.owner}></ProfilePreview>
        </div>
      </div>
      <div className={styles['section']}>
        <ProductStatistic statistic={product.statistic} isPreview={false} />
      </div>
    </div>
  );
};

export default ProductDescription;
