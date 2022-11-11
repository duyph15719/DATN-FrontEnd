import axios from "axios";
export const uploadCloudinary = (data) => {
    const url = "https://api.cloudinary.com/v1_1/tr-n-t-ng/image/upload"

    const header = { "Content-Type": "application/x-www-formendcoded", };
    return axios.post(url, data, header);
};