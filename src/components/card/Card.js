import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import pokeball from "../../assets/images/pokeball.png";
import { AddFavorite } from "../../redux/actions/favorites/addFavorite";
import { RemoveFavorite } from "../../redux/actions/favorites/removeFavorite";
import { red } from "@mui/material/colors";
import { UserRequest } from "../../redux/actions/auth/user";
import styles from "./Card.module.css";
import CardContentPokemon from "./CardContentPokemon";

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

	return (
		<Card
			className={styles[types[0]]}
			sx={{
				width: 270,
				transition: "transform 0.3s, box-shadow 0.3s",
				"&:hover": {
					boxShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.5)",
					transform: "scale(1.1)",
				},
			}}
		>
			<CardHeader
				avatar={
					<Avatar
						alt="pokeball"
						src={pokeball}
						sx={{ width: 30, height: 30 }}
					/>
				}
				action={
					<IconButton
						aria-label="add to favorites"
						onClick={handleAddToFavorites}
						sx={{
							color: isFavorite ? red[500] : "#0000008a",
						}}
					>
						<FavoriteIcon />
					</IconButton>
				}
				title={
					<Typography variant="h6" component="h6">
						{name}
					</Typography>
				}
				subheader={<Typography mt={-0.5}>{`${lifeTime} HP`}</Typography>}
				sx={{ backgroundColor: "#343B42", color: "#fff" }}
			/>
			<CardMedia
				component="img"
				height="200"
				image={imgT}
				alt={name}
				sx={{ objectFit: "contain" }}
			/>
			<CardContentPokemon
				height={height}
				weight={weight}
				attack={attack}
				defense={defense}
				speed={speed}
				types={types}
			/>
		</Card>
	);
}
