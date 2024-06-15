import { combineReducers } from "redux";
import authReducer from "./authReducer";

const appReducer = combineReducers({
	useUser: authReducer,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
