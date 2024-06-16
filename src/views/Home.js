import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import CardPokemon from "../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemons } from "../redux/actions/pokemons/getPokemons";
import { UserRequest } from "../redux/actions/auth/user";
import { Container } from "@mui/material";
import loading from "../assets/gif/loading.gif";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
	const dispatch = useDispatch();
	const { pokemons } = useSelector((state) => state.usePokemon);
	const { user } = useSelector((state) => state.useUser);
	const pokemonsLoading = useSelector(
		(state) => state.usePokemon.is_pokemons_loading
	);

	const isFavorite = (pokemonId) => {
		if (user.favorites) return user.favorites.includes(pokemonId);
	};

	useEffect(() => {
		const email = localStorage.getItem("email");
		const token = localStorage.getItem("token");
		if (email && token) {
			dispatch(UserRequest(email));
		}
		dispatch(GetPokemons());
	}, []);

	return (
		<div>
			<Navbar />
			{pokemonsLoading ? (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "80vh",
					}}
				>
					<img src={loading} alt="loading..." />
				</div>
			) : (
				<Container
					maxWidth="lg"
					sx={{
						marginTop: "70px",
						marginBottom: "200px",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Grid container justifyContent="center" spacing={3}>
						{pokemons?.map(
							({
								id,
								name,
								lifeTime,
								force,
								defending,
								speed,
								height,
								weight,
								type,
								imgT,
							}) => (
								<Grid item key={id}>
									<CardPokemon
										id={id}
										name={name}
										lifeTime={lifeTime}
										defense={defending}
										height={height}
										weight={weight}
										attack={force}
										speed={speed}
										imgT={imgT}
										types={type}
										isFavorite={isFavorite(id)}
									/>
								</Grid>
							)
						)}
					</Grid>
				</Container>
			)}
		</div>
	);
};
export default Home;
