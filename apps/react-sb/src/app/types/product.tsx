import { IProfile } from './profile';

export interface IProduct {
  id: number;
  info: IProductInfo;
  imageArray: string[];
}

interface IProductInfo {
  creator: IProfile;
  collection: string;
  owner: IProfile;
  description: string;
  name: string;
}
