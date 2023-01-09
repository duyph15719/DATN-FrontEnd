export type RecaiptType = {
    _id?: any,
    name?: string |any;
    status?: number,
    address?:string,
    payments?:number,
    phone?:number,
    note?: string,
    email?: string,
    UserId?: string | any,
    city?:string,
    total?: number,
}
export type RecaiptDetailType = {
    _id?: any,
    ProductsId?:string| any ,
    sizeId?: string|any,
    colorId?: string|any,
    quantity?: number,
    price?: number,
    categoryId?: string,
    orderId?: string,
    total?: number,
    colorName?: string,
    sizeName?: string,
    productName?:string,
    image?:string,
}
export type OrderLogsType = {
    orderId?: string | any,
    statusOrderLogs: number,
    userId?: string | any,
    createdAt?: string,
    userName?:string |any
}