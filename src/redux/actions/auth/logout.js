import { logout } from "../../reducers/authReducer";

export const Logout = () => {
	return (dispatch) => {
		dispatch(logout());
		localStorage.removeItem("token");
		localStorage.removeItem("email");
	};
};
