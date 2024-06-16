import React from "react";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import pokeball from "../../assets/images/pokeball.png";
import { Grid } from "@mui/material";
import { AddFavorite } from "../../redux/actions/favorites/addFavorite";
import { RemoveFavorite } from "../../redux/actions/favorites/removeFavorite";
import { red } from "@mui/material/colors";
import { UserRequest } from "../../redux/actions/auth/user";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const Measure = styled(Paper)(({ theme }) => ({
	backgroundColor: "#1A2027",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function CardPokemon({
	id,
	name,
	lifeTime,
	height,
	weight,
	attack,
	defense,
	speed,
	imgT,
	types,
	isFavorite,
}) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.useUser);
	const email = localStorage.getItem("email");

	const handleAddToFavorites = () => {
		const formData = {
			userId: user.id,
			pokemonId: id,
		};
		if (isFavorite) {
			dispatch(RemoveFavorite(formData)).then(() => {
				dispatch(UserRequest(email));
			});
		} else {
			dispatch(AddFavorite(formData)).then(() => {
				dispatch(UserRequest(email));
			});
		}
	};

	// const typePokemon = type[0]
	// const typeColor = types[0];
	// console.log("color es", typeColor);  maxWidth="lg"
	return (
		<Card sx={{ maxWidth: 300 }}>
			<CardHeader
				avatar={
					<Avatar
						alt="pokeball"
						src={pokeball}
						sx={{ width: 27, height: 27 }}
					/>
				}
				action={
					<IconButton
						aria-label="add to favorites"
						onClick={handleAddToFavorites}
						sx={{
							color: isFavorite ? red[500] : "#0000008a", // Set color based on prop
						}}
					>
						<FavoriteIcon />
					</IconButton>
				}
				title={name}
				subheader={`${lifeTime} HP`}
			/>
			<CardMedia
				component="img"
				height="200"
				width="auto"
				image={imgT}
				alt={name}
			/>
			<CardContent>
				<Measure>
					Mesure: Length:{" "}
					{Math.round((height * 0.1 + Number.EPSILON) * 100) / 100} m, Weight :{" "}
					{Math.round((weight * 0.1 + Number.EPSILON) * 100) / 100} Kg
				</Measure>
				<Grid container rowSpacing={1} columnSpacing={2} row={3}>
					<Grid item xs={6}>
						{attack}
					</Grid>
					<Grid item xs={6}>
						{defense}
					</Grid>
					<Grid item xs={6}>
						{speed}
					</Grid>
				</Grid>
				<Grid container rowSpacing={1}>
					{types?.map((type, index) => {
						return (
							<Grid key={index} item xs={6}>
								<Item>{type}</Item>
							</Grid>
						);
					})}
				</Grid>
			</CardContent>
			{/* <CardActions disableSpacing>
				<IconButton
					aria-label="add to favorites"
					onClick={handleAddToFavorites}
					sx={{
						color: isFavorite ? red[500] : "#0000008a", // Set color based on prop
					}}
				>
					<FavoriteIcon />
				</IconButton>
			</CardActions> */}
		</Card>
	);
}
