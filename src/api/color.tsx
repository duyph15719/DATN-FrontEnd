import instance from "./instance";
import {IColor} from "../models/Color"

export const listColor =() =>{
    return instance.get(`/colors`)
}

export const readColor =(id:string|number) =>{
    return instance.get(`/colors/${id}`)
}

export const removeColor =(id:string|number) =>{
    return instance.delete(`/colors/${id}`)
}

export const addColor =(Color:IColor) =>{
    return instance.post(`/colors`,Color)
}
export const updateColor =(Color:IColor) =>{
    return instance.put(`/Color/${Color.id}`,Color)
}