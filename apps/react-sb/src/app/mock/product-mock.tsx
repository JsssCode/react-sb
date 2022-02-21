import { IProduct } from '../types/product';
import { RoleType } from '../types/profile';

export const mockProduct: IProduct = {
  id: 1,
  info: {
    name: 'Copy 1',
    creator: {
      imgUrl: 'assets/user-ava/avatar2.png',
      name: 'Creator Name 1',
      role: RoleType.CREATOR,
    },
    collection: 'Collection Name',
    owner: {
      imgUrl: 'assets/user-ava/avatar1.png',
      name: 'owner Name 1',
      role: RoleType.OWNER,
    },
    description: 'Product description 1 ',
  },
  imageArray: [
    'assets/monkey/monkey1.png',
    'assets/monkey/monkey2.png',
    'assets/monkey/monkey3.png',
  ],
};

export const mockProductList: Array<IProduct> = [
  {
    id: 10,
    info: {
      name: 'Copy 10 Copy 10Copy 10Copy 10Copy 10Copy 10Copy 10Copy 10Copy 10 Copy 10 Copy 10',
      creator: {
        imgUrl: 'assets/user-ava/avatar2.png',
        name: 'Creator Name 10 Creator Name 10 Creator Name 10 Creator Name 10 Creator Name 10 Creator Name 10 Creator Name 10',
        role: RoleType.CREATOR,
      },
      collection: 'Collection Name',
      owner: {
        imgUrl: 'assets/user-ava/avatar1.png',
        name: 'owner Name 1 owner Name 1 owner Name 1 owner Name 1 owner Name 1 owner Name 1 v owner Name 1 owner Name 1',
        role: RoleType.OWNER,
      },
      description:
        'Product description 10 Product description 10 Product description 10 Product description 10Product description 10 Product description 10 Product description 10 Product description 10',
    },
    imageArray: [
      'assets/monkey/monkey1.png',
      'assets/monkey/monkey2.png',
      'assets/monkey/monkey3.png',
    ],
  },
  {
    id: 11,
    info: {
      name: 'Copy 11',
      creator: {
        imgUrl: 'assets/user-ava/avatar2.png',
        name: 'Creator Name 11',
        role: RoleType.CREATOR,
      },
      collection: 'Collection Name',
      owner: {
        imgUrl: 'assets/user-ava/avatar1.png',
        name: 'owner Name 11',
        role: RoleType.OWNER,
      },
      description: 'Product description 11 ',
    },
    imageArray: [
      'assets/monkey/monkey1.png',
      'assets/monkey/monkey2.png',
      'assets/monkey/monkey3.png',
    ],
  },
  {
    id: 2,
    info: {
      name: 'Copy 2',
      creator: {
        imgUrl: 'assets/user-ava/avatar3.png',
        name: 'Creator Name 2',
        role: RoleType.CREATOR,
      },
      collection: 'Collection Name 2',
      owner: {
        imgUrl: 'assets/user-ava/avatar4.png',
        name: 'owner Name 2',
        role: RoleType.OWNER,
      },
      description: 'Product description 2 ',
    },
    imageArray: [
      'assets/monkey/monkey3.png',
      'assets/monkey/monkey4.png',
      'assets/monkey/monkey5.png',
    ],
  },
  {
    id: 3,
    info: {
      name: 'Copy 3',
      creator: {
        imgUrl: 'assets/user-ava/avatar6.png',
        name: 'Creator Name 3',
        role: RoleType.CREATOR,
      },
      collection: 'Collection Name 3',
      owner: {
        imgUrl: 'assets/user-ava/avatar5.png',
        name: 'owner Name 3',
        role: RoleType.OWNER,
      },
      description: 'Product description 3 ',
    },
    imageArray: [
      'assets/monkey/monkey7.png',
      'assets/monkey/monkey8.png',
      'assets/monkey/monkey4.png',
    ],
  },
  {
    id: 4,
    info: {
      name: 'Copy 4',
      creator: {
        imgUrl: 'assets/user-ava/avatar7.png',
        name: 'Creator Name 4',
        role: RoleType.CREATOR,
      },
      collection: 'Collection Name 4',
      owner: {
        imgUrl: 'assets/user-ava/avatar5.png',
        name: 'owner Name 4',
        role: RoleType.OWNER,
      },
      description: 'Product description 4 ',
    },
    imageArray: [
      'assets/monkey/monkey7.png',
      'assets/monkey/monkey8.png',
      'assets/monkey/monkey3.png',
    ],
  },
  {
    id: 5,
    info: {
      name: 'Copy 5',
      creator: {
        imgUrl: 'assets/user-ava/avatar7.png',
        name: 'Creator Name 5',
        role: RoleType.CREATOR,
      },
      collection: 'Collection Name 5',
      owner: {
        imgUrl: 'assets/user-ava/avatar8.png',
        name: 'owner Name 5',
        role: RoleType.OWNER,
      },
      description: 'Product description 5 ',
    },
    imageArray: [
      'assets/monkey/monkey2.png',
      'assets/monkey/monkey1.png',
      'assets/monkey/monkey3.png',
    ],
  },
  {
    id: 6,
    info: {
      name: 'Copy 6',
      creator: {
        imgUrl: 'assets/user-ava/avatar6.png',
        name: 'Creator Name 6',
        role: RoleType.CREATOR,
      },
      collection: 'Collection Name 6',
      owner: {
        imgUrl: 'assets/user-ava/avatar7.png',
        name: 'owner Name 6',
        role: RoleType.OWNER,
      },
      description: 'Product description 6 ',
    },
    imageArray: [
      'assets/monkey/monkey6.png',
      'assets/monkey/monkey5.png',
      'assets/monkey/monkey4.png',
    ],
  },
  {
    id: 7,
    info: {
      name: 'Copy 7',
      creator: {
        imgUrl: 'assets/user-ava/avatar3.png',
        name: 'Creator Name 7',
        role: RoleType.CREATOR,
      },
      collection: 'Collection Name 7',
      owner: {
        imgUrl: 'assets/user-ava/avatar.png',
        name: 'owner Name 7',
        role: RoleType.OWNER,
      },
      description: 'Product description 7 ',
    },
    imageArray: [
      'assets/monkey/monkey7.png',
      'assets/monkey/monkey6.png',
      'assets/monkey/monkey5.png',
    ],
  },
  {
    id: 8,
    info: {
      name: 'Copy 8',
      creator: {
        imgUrl: 'assets/user-ava/avatar3.png',
        name: 'Creator Name 8',
        role: RoleType.CREATOR,
      },
      collection: 'Collection Name 8',
      owner: {
        imgUrl: 'assets/user-ava/avatar5.png',
        name: 'owner Name 8',
        role: RoleType.OWNER,
      },
      description: 'Product description 8 ',
    },
    imageArray: [
      'assets/monkey/monkey5.png',
      'assets/monkey/monkey6.png',
      'assets/monkey/monkey7.png',
    ],
  },
];
