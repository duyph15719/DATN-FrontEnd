import { RecaiptType } from "../models/receipt";
import instance from "./instance";


export const listReceipt = ( start = 0, limit = 0) => {
    let url = `/${DB_NAME}/?_sort=createdAt&_orders=desc`;
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
    let url = `/${DB_NAME}/?UserId=${userId}&_sort=createdAt&_receipt=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
}

export const removeReceipt = (id: any) => {
    const url = `/orders/${id}`;
    return instance.delete(url);
}

export const update = (order:{ _id?: string; status: number }) => {
    const url = `/${DB_NAME}/${order._id}`;
    return instance.put(url, order);
}
const DB_NAME = "orders";
export const isAuthenticate = () => {
    return JSON.parse(JSON.parse(localStorage.getItem("persist:root") as string).auth).value;
}



