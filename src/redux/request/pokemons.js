import axios from "../../axios/axios_instance";

const pokemon = {
	GetAllPokemons: async () => {
		try {
			const resp = await axios.get("/pokemons");
			return resp.data.data;
		} catch (error) {
			return error;
		}
	}
};

export default pokemon;
