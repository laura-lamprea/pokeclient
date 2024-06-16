import { createAsyncThunk } from "@reduxjs/toolkit";
import favorites from "../../request/favorites";

export const GetFavorites = createAsyncThunk(
	"useFavorites/GetFavoritesRequest",
	async ({id }, { rejectWithValue }) => {
		try {
			const result = await favorites.GetFavorites(id);
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
