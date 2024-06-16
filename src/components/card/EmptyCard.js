import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import pokeball from "../../assets/images/pokeball.png";
import pikachu from "../../assets/images/pikachu.png";
import { CardContent } from "@mui/material";

export default function EmptyCard() {
	return (
		<Card
			sx={{
				backgroundColor: "#E2F1FF",
				width: 270,
				mt: "30px",
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
				title={
					<Typography variant="h6" component="h6">
						No pokemon yet
					</Typography>
				}
				subheader={<Typography mt={-0.5}>Add to Favorites</Typography>}
				sx={{ backgroundColor: "#ef5350", color: "#fff" }}
			/>
			<CardMedia
				component="img"
				height="200"
				image={pikachu}
				alt="NO HAY POKEMON"
				sx={{ objectFit: "contain" }}
			/>
			<CardContent>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ textAlign: "center" }}
				>
					Catch'em all! Add to your favorites and unleash the coach inside you.
					Let them be your travel partners.
				</Typography>
			</CardContent>
		</Card>
	);
}
