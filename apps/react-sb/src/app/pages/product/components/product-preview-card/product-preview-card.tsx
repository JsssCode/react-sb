import ItemImage from '../../../../components/shared/item-image/item-image';
import { IProduct } from './../../../../types/product';
import React, { FC, useEffect, useState } from 'react';
import ProductTitleSection from '../product-title/product-title';
import ProfilePreview from '../profile-preview/profile-preview';
import styles from './product-preview-card.module.scss';
import { useParams } from 'react-router-dom';
import ProductStatistic from '../product-statistic/product-statistic';

interface IProductPreviewCardProps {
  product: IProduct;
  update?: (product: IProduct) => void;
}
export const ProductPreviewCard: FC<IProductPreviewCardProps> = ({
  product,
  update
}) => {
  const [activeProductId, setCurrentProductId] = useState<number>();
  const params = useParams();

  useEffect(() => {
    if (params['productId']) {
      setCurrentProductId(parseInt(params['productId'], 10));
    }
  }, [params]);

  const handleUpdate = (event: React.MouseEvent) => {
    event.stopPropagation();
    const name = prompt(product.info.name) || "";
    update && update({ ...product, info: { ...product.info, name } })
  }
  return (
    <div
      // onClick={handleUpdate}
      className={[
        styles['card'],
        product.id === activeProductId ? styles['card__active'] : '',
      ].join(' ')}
    >
      <div>
        <div>
          <div className={styles['section']}>
            <ProfilePreview profile={product.info.creator} />
            <ItemImage widthImage="252px" srcImage={product.imageArray[0]} />
            <ProductTitleSection product={product} />
          </div>
          <div className={styles['section']}>
            <div className="grid grid-nogutter align-items-end">
              <div className="col">
                <div className="font-light text-500 text-sm ">
                  Last sold for
                </div>
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
          <div className={styles['section']}>
            <ProductStatistic statistic={product.statistic} isPreview={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
