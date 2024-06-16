import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CardPokemon from "../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemons } from "../redux/actions/pokemons/getPokemons";
import { UserRequest } from "../redux/actions/auth/user";
import { Container } from "@mui/material";

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
		dispatch(UserRequest(email));
		dispatch(GetPokemons());
	}, []);

	return (
		<div>
			<h1>Home TODO LOS POKEMONES AQUI</h1>
			<Button variant="contained" component={Link} to="/favorites">
				IR A FAVORITOS
			</Button>
			{pokemonsLoading ? (
				<p>Loading Pokemons...</p>
			) : (
				<Container maxWidth="lg">
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						rowSpacing={3}
						columnSpacing={5}
					>
						{pokemons.map(
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
								<CardPokemon
									key={id}
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
							)
						)}
					</Grid>
				</Container>
			)}
		</div>
	);
};
export default Home;
