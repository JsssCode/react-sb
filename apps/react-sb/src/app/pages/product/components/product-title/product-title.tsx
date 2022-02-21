import { IProduct } from '../../../../types/product';
import { FC } from 'react';

import styles from './product-title.module.scss';

export interface IProductTitleSection {
  product: IProduct;
  actions?: boolean;
}

const ProductTitleSection: FC<IProductTitleSection> = ({
  product,
  actions,
}) => {
  return (
    <div>
      <div className={styles['title']}>{product.info.name}</div>
      <div className={styles['subtitle']}>
        <div>Collection:</div>
        <div className={styles['collection']}>{product.info.collection}</div>
      </div>
    </div>
  );
};

export default ProductTitleSection;
