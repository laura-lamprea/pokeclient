import React from "react";
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import pokebackground from "../assets/images/backgroundPoke.jpg";

const PublicRoute = () => {
	return (
		<Grid container component="main" sx={{ height: "100vh" }}>
			<CssBaseline />
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: `url(${pokebackground})`,
					backgroundRepeat: "no-repeat",
					backgroundColor: (t) =>
						t.palette.mode === "light"
							? t.palette.grey[50]
							: t.palette.grey[900],
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
				<Outlet />
			</Grid>
		</Grid>
	);
};

export default PublicRoute;
