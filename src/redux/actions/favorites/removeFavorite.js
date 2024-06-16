import { createAsyncThunk } from "@reduxjs/toolkit";
import favorites from "../../request/favorites";

export const RemoveFavorite = createAsyncThunk(
    "useFavorites/RemoveFavorite",
    async (formData, { rejectWithValue }) => {
        try {
            const result = await favorites.RemoveFavorite(formData);
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