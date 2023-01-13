import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import ProductReducer from "./slice/productSlice";
import CategoriesReducer from "./slice/categoriesSlice";
import BannerReducer from "./slice/BannerSlice";
import UserReducer from "./slice/userslice";
import ReceiptSlice from "./slice/receiptSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
};
const reducers = combineReducers({
  ProductReducer,
  CategoriesReducer,
  BannerReducer,
  UserReducer,
  ReceiptSlice,
});
const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;
