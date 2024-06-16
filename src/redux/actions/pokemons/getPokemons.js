import { createAsyncThunk } from "@reduxjs/toolkit";
import pokemon from "../../request/pokemons";

export const GetPokemons = createAsyncThunk(
	"usePokemon/GetPokemons",
	async (_, { rejectWithValue }) => {
		try {
			const result = await pokemon.GetAllPokemons();
			return result
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
