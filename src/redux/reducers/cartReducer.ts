import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
const name = "cart";
const nameLocalStorage = "_cart";
type State = {
	items: any[];
	count: number;
};
const initialState: State = JSON.parse(localStorage.getItem(nameLocalStorage) || JSON.stringify({ items: [], count: 0 }));
const slice = createSlice({
	name,
	initialState,
	reducers: {
		add: (state, action: PayloadAction<any>) => {
			const index = state.items.findIndex((item: any) => item.productId === action.payload.productId);
			if (index === -1) {
				state.items.push(action.payload);
			} else {
				state.items[index].quantity += action.payload.quantity;
			}
			state.count += action.payload.quantity;
			localStorage.setItem(nameLocalStorage, JSON.stringify(state));
		},
		update: (state, action: PayloadAction<any>) => {
			const index = state.items.findIndex((item: any) => item.productId === action.payload.productId);
			if (index !== -1) {
				state.count -= state.items[index].quantity;
				state.items[index].quantity = action.payload.quantity;
				state.count += state.items[index].quantity;
			}
			localStorage.setItem(nameLocalStorage, JSON.stringify(state));
		},
		delete: (state, action: PayloadAction<any>) => {
			const index = state.items.findIndex((item: any) => item.productId === action.payload);
			if (index !== -1) {
				state.count -= state.items[index].quantity;
				state.items.splice(index, 1);
			}
			localStorage.setItem(nameLocalStorage, JSON.stringify(state));
		},
	},
});
export const cartState = (state: RootState) => state[name];
export const cartActions = slice.actions;
export default slice.reducer;
