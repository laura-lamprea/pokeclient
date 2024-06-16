import { createSlice } from "@reduxjs/toolkit";
import { LoginRequest } from "../actions/auth/login";
import { UserRequest } from "../actions/auth/user";

const initialState = {
	isAuth: false,
	is_loading: false,
	user: [],
	is_user_loading: false,
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
			})
			.addCase(UserRequest.pending, (state) => {
				return { ...state, is_user_loading: true, user: [] };
			})
			.addCase(UserRequest.fulfilled, (state, action) => {
				return {
					...state,
					is_user_loading: false,
					user: action.payload,
				};
			})
			.addCase(UserRequest.rejected, (state) => {
				return { ...state, is_user_loading: true, user: [] };
			});
	},
});

export const { logout } = userReducer.actions;

export default userReducer.reducer;
