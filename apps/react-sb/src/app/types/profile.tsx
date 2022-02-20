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
