import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { add, list, remove, update } from '../../api/quantity';




const initialState: any = {
    quantity: [],
}

export const addquantity = createAsyncThunk(
    "quantity/addquantity",
    async (quantity: any) => {
        const { data } = await add(quantity)
        return data;
    }
)
export const updatequantity = createAsyncThunk(
    "quantity/updatequantity",
    async (quantity: any) => {
        const { data } = await update(quantity)
        return data;
    }
)
export const quantityRemove = createAsyncThunk(
    "quantity/quantityRemove",

    async (id: any) => {
        const { data } = await remove(id)
        return data;
    }
)


export const quantityList = createAsyncThunk(
    "quantity/quantityList",
    async () => {
        const { data } = await list()
        return data;
    }
)

export const quantitySlice = createSlice({
    name: "quantity",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(addquantity.fulfilled, (state, action) => {
            state.quantity.push(action.payload)
        });

        builder.addCase(quantityList.fulfilled, (state, action) => {
            state.quantity = action.payload
        });
        builder.addCase(quantityRemove.fulfilled, (state, action) => {
            state.quantity = state.quantity.filter((item: any) => item._id !== action.payload._id)
        });
        builder.addCase(updatequantity.fulfilled, (state, action) => {
            state.quantity = state.quantity.map((item: any) => item._id == action.payload._id ? action.payload : item)
        });
    }
}
)

// Action creators are generated for each case reducer function

export default quantitySlice.reducer