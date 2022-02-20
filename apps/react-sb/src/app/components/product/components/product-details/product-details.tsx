import ItemImage from '../../../shared/item-image/item-image';
import { Card } from 'primereact/card';
import { FC, useState } from 'react';
import { IProduct } from '../../../../types/product';
import ProductDescription from './product-description';

interface ProductDetailsProps {
  product: IProduct;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.imageArray[0]);

  return (
    <div className="flex m-5">
      <div>
        <div className="column">
          {product.imageArray.map((imageUrl) => (
            <div
              className="mb-5 cursor-pointer"
              onClick={() => setCurrentImage(imageUrl)}
            >
              <ItemImage
                srcImage={imageUrl}
                widthImage="100px"
                key={imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="ml-5">
        {' '}
        <ItemImage srcImage={currentImage || ''} widthImage="550px" />
      </div>

      <div className="ml-8">
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
