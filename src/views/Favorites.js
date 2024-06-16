import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetFavorites } from "../redux/actions/favorites/getFavorites";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardPokemon from "../components/card/Card";
import { UserRequest } from "../redux/actions/auth/user";
import { Container } from "@mui/material";
import loading from "../assets/gif/loading.gif";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmptyCard from "../components/card/EmptyCard";

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
		const token = localStorage.getItem("token");
		if (email && token) {
			dispatch(UserRequest(email));
		}
	}, [dispatch]);

	useEffect(() => {
		if (!userLoading && user?.id) {
			dispatch(GetFavorites({ id: user.id }));
		}
	}, [userLoading, dispatch, user?.id]);

	return (
		<div>
			{favoritesLoading ? (
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
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						marginTop: "50px",
						marginBottom: "100px",
					}}
				>
					<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
						<Button
							variant="outlined"
							startIcon={<ArrowBackIcon />}
							component={Link}
							to="/home"
							sx={{ height: "40px" }}
						>
							Back
						</Button>
						<h1>Your favorites</h1>
					</div>
					<Grid container justifyContent="center" spacing={3}>
						{favorites.length === 0 ? (
							<EmptyCard/>
						) : (
							favorites?.map(
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
							)
						)}
					</Grid>
				</Container>
			)}
		</div>
	);
};

export default Favorites;
