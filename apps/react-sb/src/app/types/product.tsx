import { Currency, IProfile, PriceHistoryEventType } from './profile';

export interface IProduct {
  id: number;
  info: IProductInfo;
  imageArray: string[];
  statistic: IStatistic;
}

interface IProductInfo {
  creator: IProfile;
  isLiked: boolean;
  collection: string;
  owner: IProfile;
  description: string;
  name: string;
}

export interface IStatistic {
  watch: number;
  like: number;
  rate: number;
  costCourse: number;
}

export interface IPriceHistory {
  productId: number;
  type: PriceHistoryEventType;
  price?: number;
  stability?: number;
  seller: string;
  buyer: string;
  date: string;
  currency: Currency;
}
