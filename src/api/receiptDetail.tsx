import { RecaiptDetailType } from "../models/receipt";
import instance from "./instance";

const DB_NAME = "orderDetail";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};
export const getReceiptIdDetail = (id: any) => {
    const url = `/orderDetail/${id}`;
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

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (orderDetail: RecaiptDetailType) => {
    const url = `/${DB_NAME}/${orderDetail._id}`;
    return instance.put(url, orderDetail);
}