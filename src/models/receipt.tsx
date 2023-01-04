export type RecaiptType = {
    _id?: any,
    name?: string;
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
}
export type OrderLogsType = {
    orderId?: string | any,
    status: number,
    userId?: string | any,
    createdAt?: string
}