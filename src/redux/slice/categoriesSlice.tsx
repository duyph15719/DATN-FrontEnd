import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addCategory, listCategory, removeCategory, updateCategory } from '../../api/Categories';



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
export const updateCategories = createAsyncThunk(
    "categories/updateCategories",
    async (categories: any) => {
        const { data } = await updateCategory(categories)
        return data;
    }
)
export const categoriesRemove = createAsyncThunk(
    "categories/removeCategories",

    async (id: any) => {
        const { data } = await removeCategory(id)
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
        builder.addCase(categoriesRemove.fulfilled, (state, action) => {
            state.categories = state.categories.filter((item: any) => item._id !== action.payload._id)
        });
        builder.addCase(updateCategories.fulfilled, (state, action) => {
            state.categories = state.categories.map((item: any) => item._id == action.payload._id ? action.payload : item)
        });
    }
}
)

// Action creators are generated for each case reducer function

export default categoriesSlice.reducer