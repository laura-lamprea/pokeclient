import { createSlice } from "@reduxjs/toolkit";
import { LoginRequest } from "../actions/auth/login";

const initialState = {
	isAuth: false,
	is_loading: false,
};

export const userReducer = createSlice({
	name: "useUser",
	initialState,
	reducers: {
		logout: () => {
			return initialState;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(LoginRequest.pending, (state) => {
				return { ...state, is_loading: true, isAuth: false };
			})
			.addCase(LoginRequest.fulfilled, (state, action) => {
				return {
					...state,
					is_loading: false,
					isAuth: true,
				};
			})
			.addCase(LoginRequest.rejected, (state) => {
				return { ...state, is_loading: true, isAuth: false };
			});
	},
});

export const { logout } = userReducer.actions;

export default userReducer.reducer;
