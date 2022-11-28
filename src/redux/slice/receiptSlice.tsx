import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { add, update, getReceiptId, listReceipt, removeReceipt } from '../../api/receipt';
import { RecaiptType } from '../../models/receipt';


const initialState: any = {
    receipts: [],
}

export const addReceipt = createAsyncThunk(
  "receipt/addReceipt",
  async (receipt: any) => {
    const { data } = await add(receipt)
    return data;
  }
)


export const Receiptlist = createAsyncThunk(
  "receipt/listReceipt",
  async () => {
    const { data } = await listReceipt()
    return data;
  }
)
export const receiptRemove = createAsyncThunk(
  "receipt/removeReceipt",

  async (id: any) => {
    const { data } = await removeReceipt(id)
    return data;
  }
)
export const receiptUpdate = createAsyncThunk(
  "receipt/receiptUpdate",
  async (receipt: any) => {
    const { data } = await update(receipt)
    return data;
  }
)
export const receiptread = createAsyncThunk(
  "receipt/receiptread",
  async (_id: any) => {
    const { data } = await getReceiptId(_id)
    return data;
  }
)

export const receiptSlice = createSlice({
  name: "receipts",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(addReceipt.fulfilled, (state, action) => {
      state.receipts.push(action.payload)
    });

    builder.addCase(Receiptlist.fulfilled, (state, action) => {
      state.receipts = action.payload
    });
    builder.addCase(receiptread.fulfilled, (state, action) => {
      state.receipts = action.payload
    });
    builder.addCase(receiptRemove.fulfilled, (state, action) => {
      state.receipts = state.receipts.filter((item: any) => item._id !== action.payload._id)
    });
    builder.addCase(receiptUpdate.fulfilled, (state, action) => {
      state.receipts = state.receipts.map((item: any) => item._id == action.payload._id ? action.payload : item)
    });
  }
}
)

// Action creators are generated for each case reducer function

export default receiptSlice.reducer