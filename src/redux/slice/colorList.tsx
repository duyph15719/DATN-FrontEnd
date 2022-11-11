import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addColor, listColor,updateColor,removeColor } from '../../api/color';



const initialState: any = {
    color: [],
}

export const addColors = createAsyncThunk(
    "color/addColor",
    async (colors: any) => {
        const { data } = await addColor(colors)
        return data;
    }
)
export const UpdateColor = createAsyncThunk(
    "color/updateColor",
    async (color: any) => {
        const { data } = await updateColor(color)
        return data;
    }
)
export const ColorRemove = createAsyncThunk(
    "color/ColorRemove",

    async (id: any) => {
        const { data } = await removeColor(id)
        return data;
    }
)


export const ColorList = createAsyncThunk(
    "color/colorsList",
    async () => {
        const { data } = await listColor()
        return data;
    }
)

export const colorsSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(addColors.fulfilled, (state, action) => {
            state.color.push(action.payload)
        });

        builder.addCase(ColorList.fulfilled, (state, action) => {
            state.color = action.payload
        });
        builder.addCase(ColorRemove.fulfilled, (state, action) => {
            state.color = state.color.filter((item: any) => item._id !== action.payload._id)
        });
        builder.addCase(UpdateColor.fulfilled, (state, action) => {
            state.color = state.color.map((item: any) => item._id == action.payload._id ? action.payload : item)
        });
    }
}
)


export default colorsSlice.reducer