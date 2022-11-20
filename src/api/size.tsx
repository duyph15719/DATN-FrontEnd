import instance from "./instance";
import { SizeType } from "../models/size";

export const listSize = () => {
    return instance.get(`/size`)
}

export const readSize = (id: string | number) => {
    return instance.get(`/size/${id}`)
}

export const removeSize = (id: string | number) => {
    return instance.delete(`/size/${id}`)
}

export const addSize = (size: SizeType) => {
    return instance.post(`/size`, size)
}
export const updateSize = (size: SizeType) => {
    return instance.put(`/size/${size._id}`, size)
}