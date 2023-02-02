import { ProductType } from "./product";

export type StatsCateProduct = {
  name: string;
  slug: string;
  image: string;
  products: ProductType[];
};

export type ResponseStatsCateProduct = {
  status: boolean;
  payload: {
    stats: StatsCateProduct[];
  };
};

export type StatsOrder = {
  status: number;
  total: number;
  statusText: string;
};

export type ResStatsOrder = {
  status: boolean;
  payload: {
    stats: StatsOrder[];
  };
};

export type StatsUserByMonth = {
  month: number;
  total: number;
};

export type ResStatsUserByMonth = {
  status: boolean;
  payload: {
    stats: StatsUserByMonth[];
  };
};

export type MoneyMonth = {
  month: number;
  totalPrice: number;
};

export type ResMoneyMonth = {
  status: boolean;
  payload: {
    stats: MoneyMonth[];
  };
};
