
import { Quantitytype } from "../models/quantity";
import instance from "./instance";


export const list = () => {
    return instance.get(`/quantity`)
}

export const read = (id: string | number) => {
    return instance.get(`/quantity/${id}`)
}

export const remove = (id: string | number) => {
    return instance.delete(`/quantity/${id}`)
}

export const add = (quantity: Quantitytype) => {
    return instance.post(`/quantity`, quantity)
}
export const update = (quantity: Quantitytype) => {
    return instance.put(`/quantity/${quantity._id}`, quantity)
}