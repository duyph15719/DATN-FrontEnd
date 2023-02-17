import { RecaiptDetailType } from "../models/receipt";
import instance from "./instance";

const DB_NAME = "orderDetail";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};
export const getReceiptIdDetail = (id: any) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}
export const getByOrderId = (orderId: string | undefined) => {
    const url = `/${DB_NAME}/?orderId=${orderId}`;
    return instance.get(url);
}

export const add = (orderDetail: RecaiptDetailType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, orderDetail);
};
