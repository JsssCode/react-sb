
import { useEffect, useState } from 'react';
import { IProduct } from '../../../../types/product';
import ProductDescription from './components/product-description';
import { Button } from 'primereact/button';
import ItemImage from '../../../../components/shared/item-image/item-image';
import { useParams } from 'react-router-dom';
import { ProductListVariants } from '../product-list/product-list';
import ProductHistory from './components/product-history';
import Loader from '../../../../components/loader/loader';
import styles from './product-details.module.scss';
import ProductList2 from '../product-list/product-list2';
import { useAppDispatch, useAppSelector } from 'apps/react-sb/src/app/hooks/redux';
import { getProduct, updateProduct } from 'apps/react-sb/src/store/reducers/actionCreators';
import { LoadingType } from 'apps/react-sb/src/app/types/loadingType';

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const { product, loading, error } = useAppSelector(state => state.productReducer);
  const [currentImage, setCurrentImage] = useState<string>();

  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId));
    }
  }, [productId])

  const handleUpdate = (product: IProduct) => {
    dispatch(updateProduct(product));
  }


  useEffect(() => {
    if (product?.imageArray) {
      setCurrentImage(product.imageArray[0]);
    }
  }, [product]);

  return (
    <div className="flex flex-column justify-content-between mt-6">
      {loading && loading === LoadingType.LOAD || !product ? (
        <div className={styles['loader']}>
          <Loader />
        </div>
      ) : (
        <div>
          <div>
            <div className="layout grid flex-column lg:flex-row  grid-nogutter lg:align-items-stretch align-items-center">
              <div className="flex justify-content-center col-6">
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

              <div className="col flex flex-column align-items-center ">

                <div className="flex flex-column align-items-center relative">
                  {
                    loading && loading === LoadingType.UPDATE &&
                    <div className={styles['loader-container']}>
                      <Loader />
                    </div>
                  }
                  <ProductDescription handleLike={handleUpdate} product={product} />
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
          </div>
          <ProductHistory />
        </div>
      )}
      <div className="mt-8 mx-3 mb-3">
        <div className="w-full">
          <ProductList2 variant={ProductListVariants.PREVIEW} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
