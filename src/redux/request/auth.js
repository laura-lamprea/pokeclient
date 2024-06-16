import axios from "../../axios/axios_instance";
const token = localStorage.getItem("token");

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
	User: async (email) => {
		try {
			const resp = await axios.get(`/user?email=${email}`, {
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error;
		}
	},
};

export default auth;
