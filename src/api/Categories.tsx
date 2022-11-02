import  instance  from "./instance";
import {ICategori} from "../models/Categories"

export const listCategory =() =>{
    return instance.get(`/categories`)
}

export const readCategory =(id:string|number) =>{
    return instance.get(`/categories/${id}`)
}

export const removeCategory =(id:string|number) =>{
    return instance.delete(`/categories/${id}`)
}

export const addCategory =(categori:ICategori) =>{
    return instance.post(`/categories`,categori)
}
export const updateCategory =(categori:ICategori) =>{
    return instance.put(`/categories/${categori.id}`,categori)
}