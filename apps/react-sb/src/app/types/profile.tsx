export interface IProfile {
  id?: number;
  imgUrl: string;
  name: string;
  role?: RoleType;
}

export enum RoleType {
  CREATOR = 'CREATOR',
  OWNER = 'OWNER',
}

export enum PriceHistoryEventType {
  TRANSFER = 'TRANSFER',
  PURCHASE = 'PURCHASE',
  BIDS = 'BIDS',
  LISTING = 'LISTING',
}

export enum Currency {
  ETH = 'ETH',
}
