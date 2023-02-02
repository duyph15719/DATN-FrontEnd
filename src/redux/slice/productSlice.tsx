import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { add, editProduct, getProductId, listProduct, removeProduct } from '../../api/product';
import { ProductType } from '../../models/product';


const initialState: any = {
  products: [],
  productsFilter: [],
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
export const productRemove = createAsyncThunk(
  "product/removeProduct",

  async (id: any) => {
    const { data } = await removeProduct(id)
    return data;
  }
)
export const productUpdate = createAsyncThunk(
  "product/productUpdate",
  async (product: any) => {
    const { data } = await editProduct(product)
    return data;
  }
)
export const productread = createAsyncThunk(
  "product/productread",
  async (_id: any) => {
    const { data } = await getProductId(_id)
    return data;
  }
)

export const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    filterProductS(state, { payload }) {
      state.products = payload || [];
    }
  },

  extraReducers: (builder) => {
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload)
    });

    builder.addCase(productList.fulfilled, (state, action) => {
      state.products = action.payload
    });
    builder.addCase(productread.fulfilled, (state, action) => {
      state.products = action.payload
    });
    builder.addCase(productRemove.fulfilled, (state, action) => {
      state.products = state.products.filter((item: any) => item._id !== action.payload._id)
    });
    builder.addCase(productUpdate.fulfilled, (state, action) => {
      state.products = state.products.map((item: any) => item._id == action.payload._id ? action.payload : item)
    });
  }
}
)

// Action creators are generated for each case reducer function

export default productSlice.reducer
export const { filterProductS } = productSlice.actions;
