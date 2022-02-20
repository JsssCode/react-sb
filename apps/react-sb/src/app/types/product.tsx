import { IProfile } from './profile';

export interface IProduct {
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
