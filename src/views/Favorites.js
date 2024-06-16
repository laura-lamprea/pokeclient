import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetFavorites } from "../redux/actions/favorites/getFavorites";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardPokemon from "../components/card/Card";
import { UserRequest } from "../redux/actions/auth/user";
import { Container } from "@mui/material";

const Favorites = () => {
	const dispatch = useDispatch();
	const { user, is_user_loading: userLoading } = useSelector(
		(state) => state.useUser
	);
	const { favorites } = useSelector((state) => state.useFavorites);
	const favoritesLoading = useSelector(
		(state) => state.useFavorites.is_favorites_loading
	);

	const isFavorite = (pokemonId) => {
		if (user.favorites) return user.favorites.includes(pokemonId);
	};

	useEffect(() => {
		const email = localStorage.getItem("email");
		dispatch(UserRequest(email));
	}, [dispatch]);

	useEffect(() => {
		if (!userLoading && user?.id) {
			dispatch(GetFavorites({ id: user.id }));
		}
	}, [userLoading, dispatch, user?.id]);

	return (
		<div>
			<Button variant="contained" component={Link} to="/home">
				Atrás
			</Button>
			<h1>Favorites</h1>
			{favoritesLoading ? (
				<p>Loading Favorites...</p>
			) : favorites.length === 0 ? (
				<p>Aún no hay favoritos.</p>
			) : (
				<Container
					maxWidth="lg"
					sx={{
						marginTop: "70px",
						marginBottom: "100px",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Grid container justifyContent="center" spacing={3}>
						{favorites?.map(
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

export default Favorites;
