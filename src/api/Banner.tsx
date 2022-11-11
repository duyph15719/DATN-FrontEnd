import { BannerType } from "../models/Banner";
import instance from "./instance";


export const listBanner = () => {
    return instance.get(`/banner`)
}

export const readBanner = (id: string | number) => {
    return instance.get(`/banner/${id}`)
}

export const removeBanner = (id: string | number) => {
    return instance.delete(`/banner/${id}`)
}

export const addBanner = (banner: BannerType) => {
    return instance.post(`/banner`, banner)
}
export const updateBanner = (banner: BannerType) => {
    return instance.put(`/banner/${banner._id}`, banner)
}