import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addCategory } from '../../api/Categories';

import { addSize, listSize, removeSize, updateSize } from '../../api/size';



const initialState: any = {
    size: [],
}

export const addsize = createAsyncThunk(
    "size/addsize",
    async (size: any) => {
        const { data } = await addSize(size)
        return data;
    }
)
export const updatesize = createAsyncThunk(
    "size/updatesize",
    async (size: any) => {
        const { data } = await updateSize(size)
        return data;
    }
)
export const SizeRemove = createAsyncThunk(
    "size/removesize",

    async (id: any) => {
        const { data } = await removeSize(id)
        return data;
    }
)


export const sizeList = createAsyncThunk(
    "size/sizeList",
    async () => {
        const { data } = await listSize()
        return data;
    }
)

export const SizeSlice = createSlice({
    name: "size",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(addsize.fulfilled, (state, action) => {
            state.size.push(action.payload)
        });

        builder.addCase(sizeList.fulfilled, (state, action) => {
            state.size = action.payload
        });
        builder.addCase(SizeRemove.fulfilled, (state, action) => {
            state.size = state.size.filter((item: any) => item._id !== action.payload._id)
        });
        builder.addCase(updatesize.fulfilled, (state, action) => {
            state.size = state.size.map((item: any) => item._id == action.payload._id ? action.payload : item)
        });
    }
}
)

// Action creators are generated for each case reducer function

export default SizeSlice.reducer