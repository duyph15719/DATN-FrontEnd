import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addBanner, listBanner, removeBanner, updateBanner } from '../../api/Banner';
import { addCategory, listCategory, removeCategory, updateCategory } from '../../api/Categories';



const initialState: any = {
    banner: [],
}

export const addbanner = createAsyncThunk(
    "banner/addbanner",
    async (banner: any) => {
        const { data } = await addBanner(banner)
        return data;
    }
)
export const updatebanner = createAsyncThunk(
    "banner/updatebanner",
    async (banner: any) => {
        const { data } = await updateBanner(banner)
        return data;
    }
)
export const bannerRemove = createAsyncThunk(
    "banner/bannerRemove",

    async (id: any) => {
        const { data } = await removeBanner(id)
        return data;
    }
)


export const bannerList = createAsyncThunk(
    "banner/bannerList",
    async () => {
        const { data } = await listBanner()
        return data;
    }
)

export const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(addbanner.fulfilled, (state, action) => {
            state.banner.push(action.payload)
        });

        builder.addCase(bannerList.fulfilled, (state, action) => {
            state.banner = action.payload
        });
        builder.addCase(bannerRemove.fulfilled, (state, action) => {
            state.banner = state.banner.filter((item: any) => item._id !== action.payload._id)
        });
        builder.addCase(updatebanner.fulfilled, (state, action) => {
            state.banner = state.banner.map((item: any) => item._id == action.payload._id ? action.payload : item)
        });
    }
}
)

// Action creators are generated for each case reducer function

export default bannerSlice.reducer