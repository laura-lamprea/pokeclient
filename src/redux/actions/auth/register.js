import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from "../../request/auth";

export const RegisterRequest = createAsyncThunk(
	"useUser/RegisterRequest",
	async (formData, { rejectWithValue }) => {
		try {
			const result = await auth.Register(formData);
			return result;
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
