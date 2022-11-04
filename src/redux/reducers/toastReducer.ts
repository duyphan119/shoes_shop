import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
const name = "toast";
type State = {
	text: string;
	open: boolean;
	id: number;
	type: "success" | "info" | "error" | "warning";
};
const initialState: State = {
	text: "",
	open: false,
	id: new Date().getTime(),
	type: "info",
};
const slice = createSlice({
	name,
	initialState,
	reducers: {
		show: (state, action: PayloadAction<{ text: string; type: "success" | "info" | "error" | "warning" }>) => {
			state.text = action.payload.text;
			state.type = action.payload.type;
			state.open = true;
			state.id = new Date().getTime();
		},
		hide: (state) => {
			state.text = "";
			state.open = false;
		},
	},
});
export const toastState = (state: RootState) => state[name];
export const toastActions = slice.actions;
export default slice.reducer;
