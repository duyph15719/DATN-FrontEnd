import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readUser, updateUser} from "../../api/User";
import { IUsers } from "../../models/User";

type AuthState = {
    isLogged: boolean,
    value: {
        user?: {}
    }
}

const initialState: AuthState = {
    isLogged: false,
    value: {}
}

export const updateAuth = createAsyncThunk(
    "auth/updateAuth",
    async (dataAuth: IUsers) => {
        return updateUser(dataAuth)
            .then(async() => {
                const { data: { password, ...rest } } = await readUser(dataAuth._id);
                return rest;
            })
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signin(state, { payload }) {
            state.isLogged = true;
            state.value = payload;
        },
        logout(state) {
            state.value = {};
            state.isLogged = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateAuth.fulfilled, (state, { payload }) => {
            state.value.user = payload;
        })
    }
})

export const { signin, logout } = authSlice.actions;
export const selectStatusLoggin = (state: any) => state.auth.isLogged;
export const selectAuth = (state: any) => state.auth.value;
export default authSlice.reducer;