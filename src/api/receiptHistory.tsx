import { OrderLogsType } from "../models/receipt";
import instance from "./instance";

const DB_NAME = "orderHistory";

export const add = (data: OrderLogsType) => {
    const url = `${DB_NAME}`;
    return instance.post(url, data);
}

export const getHistory = (orderId?: string) => {
    const url = `/${DB_NAME}/?orderId=${orderId}&_expand=userId&_expand=orderId&_sort=createdAt`;
    return instance.get(url);
}