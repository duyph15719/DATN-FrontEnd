import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import ProductReducer from './slice/productSlice'
import CategoriesReducer from './slice/categoriesSlice'
import BannerReducer from './slice/BannerSlice'
import ColorReducer from './slice/colorList'
import SizeReducer from './slice/sizeSlice'
import QuantityReducer from './slice/quantity'
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authReducer"],
};
const reducers = combineReducers({
    ProductReducer,
    CategoriesReducer,
    BannerReducer,
    ColorReducer,
    SizeReducer,
    QuantityReducer



});
const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;