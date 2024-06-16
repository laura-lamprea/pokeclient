import { createSlice } from "@reduxjs/toolkit";
import { GetPokemons } from "../actions/pokemons/getPokemons";

const initialState = {
	pokemons: [],
	is_pokemons_loading: false,
};

export const pokeReducer = createSlice({
	name: "usePokemon",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(GetPokemons.pending, (state) => {
				return { ...state, pokemons: [], is_pokemons_loading: true };
			})
			.addCase(GetPokemons.fulfilled, (state, action) => {
				return {
					...state,
					pokemons: action.payload,
					is_pokemons_loading: false,
				};
			})
			.addCase(GetPokemons.rejected, (state) => {
				return { ...state, pokemons: [], is_pokemons_loading: false };
			});
	},
});

export default pokeReducer.reducer;
