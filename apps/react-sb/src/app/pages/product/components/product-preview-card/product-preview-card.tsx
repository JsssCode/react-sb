import ItemImage from '../../../../components/shared/item-image/item-image';
import { IProduct } from './../../../../types/product';
import React, { FC } from 'react';
import ProductTitleSection from '../product-title/product-title';
import ProfilePreview from '../profile-preview/profile-preview';
import styles from './product-preview-card.module.scss';

interface IProductPreviewCardProps {
  product: IProduct;
}
export const ProductPreviewCard: FC<IProductPreviewCardProps> = ({
  product,
}) => {
  return (
    <div className={styles['card']}>
      <div>
        <div>
          <div className={styles['section']}>
            <ProfilePreview profile={product.info.creator} />
            <ItemImage widthImage="252px" srcImage={product.imageArray[0]} />
            <ProductTitleSection product={product} actions={true} />
          </div>
          <div className={styles['section']}>
            <div className="grid grid-nogutter align-items-end">
              <div className="col">
                <div className="font-light text-500 text-sm">Last sold for</div>
                <div className="font-bold text-primary text-base">12 ETH</div>
              </div>
              <div className="col col-offset-1">
                <ProfilePreview
                  profile={product.info.owner}
                  hideAvatar={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
