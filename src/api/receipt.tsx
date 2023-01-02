import { RecaiptType } from "../models/receipt";
import instance from "./instance";


export const listReceipt = ( start = 0, limit = 0) => {
    let url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
}

export const getReceiptId = (id: any) => {
    const url = `/orders/${id}`;
    return instance.get(url);
}
export const add = (receipt: RecaiptType) => {
    const url = `/orders`;
    return instance.post(url, receipt);
}

export const getByUserId = (userId: string, start = 0, limit = 0) => {
    let url = `/${DB_NAME}/?userId=${userId}&_sort=createdAt&_receipt=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
}

export const removeReceipt = (id: any) => {
    const url = `/orders/${id}`;
    return instance.delete(url);
}

export const update = (order: RecaiptType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${order._id}/${user._id}`;
    return instance.put(url, order, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const DB_NAME = "orders";
export const isAuthenticate = () => {
    return JSON.parse(JSON.parse(localStorage.getItem("persist:root") as string).auth).value;
}



