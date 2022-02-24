export interface IRoute {
  component: React.ReactNode;
  path: string;
  exact: boolean;
}

export interface ILinkItem {
  path: string;
  title: string;
}
