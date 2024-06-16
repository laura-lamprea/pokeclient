import { createSlice } from "@reduxjs/toolkit";
import { GetFavorites } from "../actions/favorites/getFavorites";

const initialState = {
	favorites: [],
	is_favorites_loading: false,
};

export const favoriteReducer = createSlice({
	name: "useFavorites",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(GetFavorites.pending, (state) => {
				return { ...state, favorites: [], is_favorites_loading: true };
			})
			.addCase(GetFavorites.fulfilled, (state, action) => {
				return {
					...state,
					favorites: action.payload,
					is_favorites_loading: false,
				};
			})
			.addCase(GetFavorites.rejected, (state) => {
				return { ...state, favorites: [], is_favorites_loading: false };
			})
	},
});

export default favoriteReducer.reducer;
