import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


import { addnews, listnews, removenews, updateNew } from '../../api/new';



const initialState: any = {
    blog: [],
}

export const addnew = createAsyncThunk(
    "blog/addnew",
    async (Blog: any) => {
        const { data } = await addnews(Blog)
        return data;
    }
)
export const updatenew = createAsyncThunk(
    "Blog/updatenew",
    async (newss: any) => {
        const { data } = await updateNew(newss)
        return data;
    }
)
export const newRemove = createAsyncThunk(
    "blog/newRemove",

    async (id: any) => {
        const { data } = await removenews(id)
        return data;
    }
)


export const newList = createAsyncThunk(
    "blog/blogList",
    async () => {
        const { data } = await listnews()
        return data;
    }
)

export const newSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(addnew.fulfilled, (state, action) => {
            state.new.push(action.payload)
        });

        builder.addCase(newList.fulfilled, (state, action) => {
            state.new = action.payload
        });
        builder.addCase(newRemove.fulfilled, (state, action) => {
            state.new = state.new.filter((item: any) => item._id !== action.payload._id)
        });
        builder.addCase(updatenew.fulfilled, (state, action) => {
            state.new = state.new.map((item: any) => item._id == action.payload._id ? action.payload : item)
        });
    }
}
)

// Action creators are generated for each case reducer function

export default newSlice.reducer

function async(arg0: any, any: any): import("@reduxjs/toolkit").AsyncThunkPayloadCreator<unknown, void, { state?: unknown; dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown; }> {
    throw new Error('Function not implemented.');
}
