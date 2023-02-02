import { AxiosRequestConfig } from "axios";
import { ResMoneyMonth, ResponseStatsCateProduct, ResStatsOrder, ResStatsUserByMonth } from "../models/stats";
import  instance  from "./instance";

export const StatsApi = {
  statsCategoryProduct(options: AxiosRequestConfig = {}): Promise<ResponseStatsCateProduct> {
    return instance.get("/stats/productByCate", options);
  },

  // thống kê số lượng đơn hàng theo trạng thái
  statsOrderByStatus(): Promise<ResStatsOrder> {
    return instance.get("/stats/order");
  },

  // thống kê user đăng ký theo tháng
  statsUserSignupByMonth(options: AxiosRequestConfig = {}): Promise<ResStatsUserByMonth> {
    return instance.get("/stats/userByMonth", options);
  },

  // doanh thu hàng tháng
  statsMoneyByMonth(options: AxiosRequestConfig = {}): Promise<ResMoneyMonth> {
    return instance.get("/stats/money", options);
  },
};
