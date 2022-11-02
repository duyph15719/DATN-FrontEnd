

// export const listSize: any = () => {
//     const url = `/size`;
//     return instance.get(url);
// }

// export const getSizeId: any = (id: any) => {
//     const url = `/size/${id}`;
//     return instance.get(url);
// }

// export const add: any = (product: any) => {
//     const url = `/size`;
//     return instance.post(url, product);
// }

// export const editSize: any = (product: any) => {
//     const url = `/size/${product.id}`;
//     return instance.put(url, product);
// }

// export const removeSize: any = (id: any) => {
//     const url = `/size/${id}`;
//     return instance.delete(url);
// }   
import { SizeType } from "../models/size";
import instance from "./instance";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DB_NAME = "size";

export const getAll = (sort = "createdAt", order = "desc") => {
    const url = `/${DB_NAME}/?_sort=${sort}&_order=${order}`;
    return instance.get(url);
};

export const get = (id?: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}