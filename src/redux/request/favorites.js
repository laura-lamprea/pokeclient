import axios from "../../axios/axios_instance";
const token = localStorage.getItem("token");

const favorites = {
	GetFavorites: async (id) => {
		try {
			const resp = await axios.get(`/users/favorites/${id}`, {
				headers: { token },
			});
			return resp.data.data;
		} catch (error) {
			return error;
		}
	},
	AddFavorite: async (data) => {
		try {
			const resp = await axios.post("/users/favorites", data, {
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error;
		}
	},
	RemoveFavorite: async (data) => {
		try {
			const resp = await axios.post("/users/favorites/remove", data, {
				headers: { token },
			});
			return resp;
		} catch (error) {
			return error;
		}
	},
};

export default favorites;
