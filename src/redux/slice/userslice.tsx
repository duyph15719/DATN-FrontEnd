import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addUser, updateUser, readUser, listUser, removeUser } from '../../api/User';
import { IUsers } from '../../models/User';


const initialState: any = {
  users: [],
}

export const addUsers = createAsyncThunk(
  "user/addUser",
  async (user: any) => {
    const { data } = await addUser(user)
    return data;
  }
)


export const UserList = createAsyncThunk(
  "user/listUser",
  async () => {
    const { data } = await listUser()
    return data;
  }
)
export const UserRemove = createAsyncThunk(
  "user/removeUser",

  async (id: any) => {
    const { data } = await removeUser(id)
    return data;
  }
)
export const UserUpdate = createAsyncThunk(
  "user/UserUpdate",
  async (user: any) => {
    const { data } = await updateUser(user)
    return data;
  }
)
export const Userread = createAsyncThunk(
  "user/Userread",
  async (_id: any) => {
    const { data } = await readUser(_id)
    return data;
  }
)

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(addUsers.fulfilled, (state, action) => {
      state.users.push(action.payload)
    });

    builder.addCase(UserList.fulfilled, (state, action) => {
      state.users = action.payload
    });
    builder.addCase(Userread.fulfilled, (state, action) => {
      state.users = action.payload
    });
    builder.addCase(UserRemove.fulfilled, (state, action) => {
      state.users = state.users.filter((item: any) => item._id !== action.payload._id)
    });
    builder.addCase(UserUpdate.fulfilled, (state, action) => {
      state.users = state.users.map((item: any) => item._id == action.payload._id ? action.payload : item)
    });
  }
}
)

// Action creators are generated for each case reducer function

export default UserSlice.reducer