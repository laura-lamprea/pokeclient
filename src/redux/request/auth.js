import axios from "../../axios/axios_instance";

const auth = {
	Login: async (data) => {
		try {
			const resp = await axios.post("/login", data);
			return resp;
		} catch (error) {
			return error;
		}
	},
	Register: async (data) => {
		try {
			const resp = await axios.post("/register", data);
			return resp;
		} catch (error) {
			return error;
		}
	},
};

export default auth;
