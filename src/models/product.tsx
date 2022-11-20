export type ProductType = {
    _id?: any,
    name: string;
    image: string,
    saleOffPrice: number;
    feature: string;
    description: string;
    status: number,
    favorites?: number,
    categoryId: string | any,
    idSize?: string,
    idcolor?: string

}
export type FavoritesProductType = {
    _id?: string,
    userId: string,
    productId?: string,
    createdAt?: Date
}