import { combineReducers } from "redux";
import authReducer from "./authReducer";
import pokeReducer from "./pokeReducer";
import favoriteReducer from "./favoriteReducer";

const appReducer = combineReducers({
	useUser: authReducer,
	usePokemon: pokeReducer,
	useFavorites: favoriteReducer,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
