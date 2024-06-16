import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from "../../request/auth";

export const UserRequest = createAsyncThunk(
	"useUser/UserRequest",
	async (email, { rejectWithValue }) => {
		const token = localStorage.getItem("token");
		if (email && token) {
			try {
				const result = await auth.User(email, token);
				return result.data.data;
			} catch (error) {
				if (error.response) {
					return rejectWithValue(error?.response.status);
				} else if (error.request) {
					return rejectWithValue(error?.request.status);
				} else {
					return rejectWithValue("UNKNOW_ERROR");
				}
			}
		} else {
			return rejectWithValue("MISSING_AUTH_DATA"); 
		}
	}
);
