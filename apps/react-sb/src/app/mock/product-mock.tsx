import { IProduct } from '../types/product';
import { RoleType } from '../types/profile';

export const mockProduct: IProduct = {
  info: {
    name: 'Copy AAAAAAAAAAA',
    creator: {
      imgUrl: 'assets/image1.jpeg',
      name: 'Creator Name',
      role: RoleType.CREATOR,
    },
    collection: 'Collection Name',
    owner: {
      imgUrl: 'assets/image1.jpeg',
      name: 'owner Name',
      role: RoleType.OWNER,
    },
    description:
      'test test test test test test test test test test test test test ',
  },
  imageArray: ['assets/image1.jpeg', 'assets/user.png', 'assets/vector.png'],
};
