import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { add, listProduct } from '../../api/product';
import { ProductType } from '../../models/product';


const initialState: any = {
  products: [],
}

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: any) => {
    const { data } = await add(product)
    return data;
  }
)


export const productList = createAsyncThunk(
  "product/listProduct",
  async () => {
    const { data } = await listProduct()
    return data;
  }
)
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload)
    });

    builder.addCase(productList.fulfilled, (state, action) => {
      state.products = action.payload
    });
  }
}
)

// Action creators are generated for each case reducer function

export default productSlice.reducer