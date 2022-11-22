import { RecaiptType } from "../models/receipt";
import instance from "./instance";


export const listReceipt: any = () => {
    const url = `/receipts`;
    return instance.get(url);
}

export const getReceiptId: any = (id: any) => {
    const url = `/receipts/${id}`;
    return instance.get(url);
}
// export const get = (slug?: string) => {
//     const url = `/${DB_NAME}/${slug}/?_expand=UserId`;
//     return instance.get(url);
// }
export const add: any = (receipt: any) => {
    const url = `/receipts`;
    return instance.post(url, receipt);
}

export const editReceipt: any = (receipt: any) => {
    const url = `/receipts/${receipt._id}`;
    return instance.put(url, receipt);
}
export const getReceiptsRelated = (start = 0, limit = 0, id: string | undefined, UserId: string | undefined) => {
    let url = `/${DB_NAME}/?UserId=${UserId}&_id_ne=${id}&status=1&_expand=UserId&_sort=createdAt&_order=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
}
const DB_NAME = "receipts";
export const clientUpdate = (product: RecaiptType) => {
    const url = `/${DB_NAME}/userUpdate/${product._id}`;
    return instance.patch(url, product);
}

export const removeReceipt: any = (id: any) => {
    const url = `/receipts/${id}`;
    return instance.delete(url);
}

export const getReceiptIdUser: any = (id: number) => {
    const url = `/receipts?User=${id}`;
    return instance.get(url);
}

export const listReceiptIdUserdetail: any = (id: number) => {
    const url = `/receipts?detailUser=${id}`;
    return instance.get(url);
}
