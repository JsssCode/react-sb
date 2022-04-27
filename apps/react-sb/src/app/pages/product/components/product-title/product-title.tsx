import { IProduct } from '../../../../types/product';
import { FC, useRef, useState } from 'react';

import styles from './product-title.module.scss';
import { Button } from 'primereact/button';
import ProductService from '../../../../api/product-service';
import { Menu } from 'primereact/menu';

export interface IProductTitleSection {
  product: IProduct;
  withActions?: boolean;
  changeLikedState?: () => void;
}

const ProductTitleSection: FC<IProductTitleSection> = ({
  product,
  withActions,
  changeLikedState,
}) => {
  // eslint-disable-next-line prefer-const
  let menu = useRef<Menu>(null);
  const menuItems = [
    {
      label: 'Update',
      icon: 'pi pi-refresh',
    },
    {
      label: 'Delete',
      icon: 'pi pi-times',
    },
  ];
  return (
    <div>
      <div className="flex justify-content-between align-items-center">
        <div className={styles['title']}>{product.info.name}</div>
        {withActions ? (
          <div>
            <div className="flex align-items-center">
              <Button
                icon={product.info.isLiked ? 'pi pi-heart-fill' : 'pi pi-heart'}
                onClick={changeLikedState}
                className="p-button-rounded p-button-secondary p-button-text"
              />
              <Button
                icon="pi pi-share-alt"
                className="p-button-rounded p-button-secondary p-button-text"
              />
              <Menu model={menuItems} popup ref={menu} id="popup_menu" />
              <Button
                icon="pi pi-ellipsis-v"
                onClick={(event) => menu.current?.toggle(event)}
                aria-controls="popup_menu"
                aria-haspopup
                className="p-button-rounded p-button-secondary p-button-text"
              />
            </div>
          </div>
        ) : null}
      </div>

      <div className={styles['subtitle']}>
        <div>Collection:</div>
        <div className={styles['collection']}>{product.info.collection}</div>
      </div>
    </div>
  );
};

export default ProductTitleSection;
