import './item-image.module.scss';
import { Image } from 'primereact/image';

/* eslint-disable-next-line */
export interface ItemImageProps {
  srcImage: string;
  widthImage: any;
}

export function ItemImage(props: ItemImageProps) {
  return (
    <>
      <Image src={props.srcImage} width={props.widthImage} template="Item image" alt="Image Text" />

    </>
  );
}

export default ItemImage;
