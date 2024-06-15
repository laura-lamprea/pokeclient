import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from "../../request/auth";

export const LoginRequest = createAsyncThunk(
	"useUser/LoginRequest",
	async (formData, { rejectWithValue }) => {
		try {
			const result = await auth.Login(formData);
			if (result?.status === 200 || result?.status === 204) {
				localStorage.setItem("token", result.data.token);
				return { status: true };
			} else {
				return { status: false };
			}
		} catch (error) {
			if (error.response) {
				return rejectWithValue(error?.response.status);
			} else if (error.request) {
				return rejectWithValue(error?.request.status);
			} else {
				return rejectWithValue("UNKNOW_ERROR");
			}
		}
	}
);
