import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import toastReducer from "./toastReducer";

const rootReducer = combineReducers({
	toast: toastReducer,
	cart: cartReducer,
});

export default rootReducer;
