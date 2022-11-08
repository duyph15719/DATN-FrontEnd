import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addCategory, listCategory } from '../../api/Categories';



const initialState: any = {
    categories: [],
}

export const addCategories = createAsyncThunk(
    "categories/addCategories",
    async (categories: any) => {
        const { data } = await addCategory(categories)
        return data;
    }
)


export const categoriesList = createAsyncThunk(
    "categories/categoriesList",
    async () => {
        const { data } = await listCategory()
        return data;
    }
)

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(addCategories.fulfilled, (state, action) => {
            state.categories.push(action.payload)
        });

        builder.addCase(categoriesList.fulfilled, (state, action) => {
            state.categories = action.payload
        });
    }
}
)

// Action creators are generated for each case reducer function

export default categoriesSlice.reducer