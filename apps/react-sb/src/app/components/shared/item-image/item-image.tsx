import styles from './item-image.module.scss';
import { Image } from 'primereact/image';
import { FC } from 'react';

/* eslint-disable-next-line */

export enum ImageVariant {
  rounded = 'ROUNDED',
  default = 'DEFAULT',
}
export interface ItemImageProps {
  srcImage: string;
  widthImage: any;
  variant?: ImageVariant;
}

const ItemImage: FC<ItemImageProps> = ({ srcImage, widthImage, variant }) => {
  return (
    <Image
      src={srcImage}
      width={widthImage}
      template="Item image"
      alt="Image Text"
      className={
        styles[variant === ImageVariant.rounded ? 'rounded' : 'default']
      }
    />
  );
};

export default ItemImage;
