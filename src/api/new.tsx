import instance from "./instance";


export const listnews = () => {
    return instance.get(`/news`)
}

export const readnews = (id: string | number) => {
    return instance.get(`/news/${id}`)
}

export const removenews = (id: string | number) => {
    return instance.delete(`/news/${id}`)
}

export const addnews = (news: any) => {
    return instance.post(`/news`, news)
}
export const updateNew = (news: any) => {
    return instance.put(`/news/${news._id}`, news)
}