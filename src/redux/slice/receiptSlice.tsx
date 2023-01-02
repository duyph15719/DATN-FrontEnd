import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { add, update, getReceiptId, listReceipt, removeReceipt } from '../../api/receipt';
import { RecaiptType } from '../../models/receipt';
import { GetCart } from '../../pages/Website/Pay/Pay';
import { add as addreceiptDetail } from "../../api/receiptDetail";


const initialState: any = {
    receipts: [],
}

export const addReceipt = createAsyncThunk(
  "receipt/addReceipt",
  async (receipt: any) => {
    const { data } = await add(receipt)
    const orderId = data._id;
    const dataOrder = GetCart()
    const GetProductsId = () => {
      return (
        <>
          {dataOrder.map((item: any) => {
            return [item?.id._id, item?.id.name, item?.quantity, item?.id.price, item?.color.colorName, item?.color._id, item?.size._id, item?.size.sizeName,item?.quantity*item?.id.price];
          })}
        </>
      );
    };
    const newData=GetProductsId().props.children;
    newData.forEach(async (order:any) => {
      await order
       addreceiptDetail({
        orderId,
        ProductsId:order[0],
        productName:order[1],
        quantity:order[2],
        price:order[3],
        colorId:order[5],
        colorName:order[4],
        sizeId:order[6],
        sizeName:order[7],
        total:order[8],
      });
    })
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