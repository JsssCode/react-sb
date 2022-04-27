import { IStatistic } from '../../../../types/product';
import { FC } from 'react';

interface IProductStatistic {
  statistic: IStatistic;
  isPreview?: boolean;
}

const ProductStatistic: FC<IProductStatistic> = ({
  statistic,
  isPreview = false,
}) => {
  return (
    <div className="flex text-sm  text-500">
      <div
        className={
          isPreview
            ? ' flex-1 flex-column flex align-items-center justify-content-center'
            : ' flex-1 flex-row flex align-items-center justify-content-center'
        }
      >
        <i className="pi pi-heart-fill  text-xl m-2"></i>
        <div> {statistic?.like || 0}</div>
      </div>
      <div
        className={
          isPreview
            ? ' flex-1 flex-column flex align-items-center justify-content-center'
            : ' flex-1 flex-row flex align-items-center justify-content-center'
        }
      >
        <i className="pi pi-eye text-xl m-2"></i>
        <div> {statistic?.watch || 0} </div>
      </div>
      <div
        className={
          isPreview
            ? ' flex-1 flex-column flex align-items-center justify-content-center'
            : ' flex-1 flex-row flex align-items-center justify-content-center'
        }
      >
        <i className="pi pi-star-fill text-xl m-2"></i>
        <div> {statistic?.rate || 0} </div>
      </div>
      <div
        className={
          isPreview
            ? ' flex-1 flex-column flex align-items-center justify-content-center'
            : ' flex-1 flex-row flex align-items-center justify-content-center'
        }
      >
        <i
          className={
            statistic?.costCourse > -0.001
              ? 'pi pi-arrow-up-right text-xl m-2'
              : 'pi pi-arrow-down-right text-xl m-2'
          }
        ></i>
        <div>
          {statistic?.costCourse && statistic?.costCourse > 0.001
            ? `+${statistic?.costCourse}`
            : statistic?.costCourse || 0}
        </div>
      </div>
    </div>
  );
};

export default ProductStatistic;
