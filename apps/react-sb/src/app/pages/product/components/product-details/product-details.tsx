import { Card } from 'primereact/card';
import { FC, useEffect, useState } from 'react';
import { IProduct } from '../../../../types/product';
import ProductDescription from './product-description';
import { Button } from 'primereact/button';
import ItemImage from '../../../../components/shared/item-image/item-image';
import { useParams } from 'react-router-dom';
import ProductService from '../../../../api/product-service';
import ProductList, { ProductListVariants } from '../product-list/product-list';

const ProductDetails = () => {
  const params = useParams();

  const [product, setProduct] = useState<IProduct>();
  const [currentImage, setCurrentImage] = useState<string>();
  useEffect(() => {
    if (params['productId']) {
      fetchProduct(params['productId']);
    }
  }, [params]);

  useEffect(() => {
    if (product) {
      setCurrentImage(product.imageArray[0]);
    }
  }, [product]);

  function fetchProduct(id: string) {
    const response = ProductService.getById(parseInt(id, 10));
    setProduct(response);
  }
  return (
    <div>
      {product ? (
        <div>
          <div className="m-5 grid grid grid-nogutter align-items-stretch">
            <div className="flex  col-6">
              <div>
                <div className="column">
                  {product.imageArray.map((imageUrl) => (
                    <div
                      key={imageUrl}
                      className="mb-5 cursor-pointer"
                      onClick={() => setCurrentImage(imageUrl)}
                    >
                      <ItemImage srcImage={imageUrl} widthImage="125px" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-5">
                {' '}
                <ItemImage srcImage={currentImage || ''} widthImage="500px" />
              </div>
            </div>

            <div className="pl-2 col-4">
              <ProductDescription product={product} />
              <div className="flex justify-content-center align-items-center mt-4">
                <Button className="p-button-rounded">
                  <span className="px-4"> Buy for 12 ETH</span>
                </Button>
                <Button className="ml-4 p-button-outlined p-button-rounded ">
                  <span className="px-5"> Place a Bid</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>LOADING</div>
      )}
      <div className="mt-8 mx-3">
        <div className="w-full">
          <ProductList variant={ProductListVariants.PREVIEW} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
