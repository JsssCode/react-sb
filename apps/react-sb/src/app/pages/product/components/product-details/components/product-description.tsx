import ProfilePreview from '../../profile-preview/profile-preview';
import { Card } from 'primereact/card';
import React, { FC } from 'react';
import { IProduct } from '../../../../../types/product';
import styles from '../product-details.module.scss';
import ProductTitleSection from '../../product-title/product-title';

interface IProductDescriptionProps {
  product: IProduct;
}

const ProductDescription: FC<IProductDescriptionProps> = ({ product }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['section']}>
        <ProductTitleSection product={product} actions={true} />
        <div className={styles['description']}>{product.info.description}</div>
      </div>
      <div className="tag"></div>
      <div className={styles['section']}>
        <div className="person mt-5 flex">
          <ProfilePreview profile={product.info.creator}></ProfilePreview>
          <ProfilePreview profile={product.info.owner}></ProfilePreview>
        </div>
      </div>
      <div className={styles['section']}>info</div>
    </div>
  );
};

export default ProductDescription;
