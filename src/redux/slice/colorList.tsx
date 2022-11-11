import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addColor, listColor } from '../../api/color';



const initialState: any = {
    color: [],
}

export const addColors = createAsyncThunk(
    "colors/addcolors",
    async (colors: any) => {
        const { data } = await addColor(colors)
        return data;
    }
)


export const ColorList = createAsyncThunk(
    "colors/colorsList",
    async () => {
        const { data } = await listColor()
        return data;
    }
)

export const colorsSlice = createSlice({
    name: "colors",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(addColors.fulfilled, (state, action) => {
            state.colors.push(action.payload)
        });

        builder.addCase(ColorList.fulfilled, (state, action) => {
            state.colors = action.payload
        });
    }
}
)

// Action creators are generated for each case reducer function

export default colorsSlice.reducer