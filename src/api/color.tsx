import instance from "./instance";
import {IColor} from "../models/Color"

export const listColor =() =>{
    return instance.get(`/colors`)
}

export const readColor =(id:string|number) =>{
    return instance.get(`/color/${id}`)
}

export const removeColor =(id:string|number) =>{
    return instance.delete(`/color/${id}`)
}

export const addColor =(Color:IColor) =>{
    return instance.post(`/color`,Color)
}
export const updateColor =(Color:IColor) =>{
    return instance.put(`/color/${Color._id}`,Color)
}