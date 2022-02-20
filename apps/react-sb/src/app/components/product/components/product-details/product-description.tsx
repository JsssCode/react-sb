import { Card } from 'primereact/card';
import React, { FC } from 'react';
import { IProduct } from '../../../../types/product';
import ItemImage, { ImageVariant } from '../../../shared/item-image/item-image';
import ProfilePreview from '../../../shared/profile-preview';

interface IProductDescriptionProps {
  product: IProduct;
}

const ProductDescription: FC<IProductDescriptionProps> = ({ product }) => {
  const cardTitle = (
    <div className="flex">
      <div className="font-bold">{product.info.name}</div>
    </div>
  );
  const cardSubtitle = (
    <div className="flex">
      <div>Collection:</div>
      <div className="pl-1 underline font-semibold text-black-alpha-90">
        {product.info.collection}
      </div>
    </div>
  );
  return (
    <Card className="card" title={cardTitle} subTitle={cardSubtitle}>
      <div className="description">{product.info.description}</div>
      <div className="tag"></div>
      <div className="person mt-5 flex">
        <ProfilePreview profile={product.info.creator}></ProfilePreview>
        <ProfilePreview profile={product.info.owner}></ProfilePreview>
      </div>
    </Card>
  );
};

export default ProductDescription;
