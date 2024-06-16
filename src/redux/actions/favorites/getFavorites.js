import { createAsyncThunk } from "@reduxjs/toolkit";
import favorites from "../../request/favorites";

export const GetFavorites = createAsyncThunk(
	"useFavorites/GetFavoritesRequest",
	async ({ id }, { rejectWithValue }) => {
		const token = localStorage.getItem("token");
		if (id && token) {
			try {
				const result = await favorites.GetFavorites(id, token);
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
		} else {
			return rejectWithValue("MISSING_AUTH_DATA");
		}
	}
);
