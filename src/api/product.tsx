import instance from "./instance";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductType } from "../models/product";

export const listProduct: any = () => {
    const url = `/products`;
    return instance.get(url);
}

export const getProductId: any = (id: any) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const get = (slug?: string) => {
    const url = `/${DB_NAME}/${slug}/?_expand=categoryId`;
    return instance.get(url);
}
export const add: any = (product: any) => {
    const url = `/products`;
    return instance.post(url, product);
}

export const editProduct: any = (product: any) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}
export const getProductsRelated = (start = 0, limit = 0, id: string | undefined, cateId: string | undefined) => {
    let url = `/${DB_NAME}/?categoryId=${cateId}&_id_ne=${id}&status=1&_expand=categoryId&_sort=createdAt&_order=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
}
const DB_NAME = "products";
export const clientUpdate = (product: ProductType) => {
    const url = `/${DB_NAME}/userUpdate/${product._id}`;
    return instance.patch(url, product);
}

export const removeProduct: any = (id: any) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}

export const getProductIdCate: any = (id: number) => {
    const url = `/products?categories=${id}`;
    return instance.get(url);
}

export const listProductIdCateDetail: any = (id: number) => {
    const url = `/products?detailCate=${id}`;
    return instance.get(url);
}
