import Loader from "apps/react-sb/src/app/components/loader/loader";
import { useAppDispatch, useAppSelector } from "apps/react-sb/src/app/hooks/redux";
import { LoadingType } from "apps/react-sb/src/app/types/loadingType";
import { IProduct, IProductInfo } from "apps/react-sb/src/app/types/product";
import { getProduct, updateProduct } from "apps/react-sb/src/store/reducers/actionCreators";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./product-form.module.scss";

const ProductForm = () => {
    const dispatch = useAppDispatch();
    const { productId } = useParams();
    const { product, loading, error, path } = useAppSelector(state => state.productReducer);
    const [isEdit, setIsEdit] = useState(false);
    const [formData, setDefaultValue] = useState<Partial<IProductInfo>>();
    const { register, reset, handleSubmit, } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (productId) {
            setIsEdit(true);
            if (!product) {
                getData()
            }
        }
        if (path) {
            navigate(path);
        }
        patchForm();
    }, [productId, product, path]);

    useEffect(() => {
        return () => {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!destroyed');

        }
    }, [])

    const patchForm = () => {

        reset({
            name: isEdit && product?.info.name || '',
            collection: isEdit && product?.info.collection || '',
            description: isEdit && product?.info.description || '',
        })
    }

    const getData = () => {
        if (productId) {
            dispatch(getProduct(productId));
        }

    }

    const onSubmit = (data: Partial<IProductInfo>) => {
        console.log(data);
        if (isEdit && product) {
            dispatch(updateProduct({ ...product, info: { ...product.info, collection: data.collection, name: data.name, description: data.description } }))
        }

    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-column align-items-center justify-content-center mt-5 relative">
                {
                    loading && loading === (isEdit ? LoadingType.UPDATE : LoadingType.LOAD) &&
                    <div className="loader-container">
                        <Loader />
                    </div>
                }
                <input type="text"  {...register("name")} className="my-1" />
                <input type="text"  {...register("collection")} className="my-1" />
                <input type="text"  {...register("description")} className="my-1" />
                <Button className=" p-button-outlined p-button-rounded " label={isEdit ? 'Update' : 'Create'} />
            </div>
        </form>

    )
}

export default ProductForm;