import React from "react";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import BoltIcon from "@mui/icons-material/Bolt"; //power
import ShieldIcon from "@mui/icons-material/Shield"; //defense
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed"; //speed
import SquareFootIcon from "@mui/icons-material/SquareFoot"; //height
import ScaleIcon from "@mui/icons-material/Scale";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/material";

const Stats = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

export default function CardContentPokemon({
	height,
	weight,
	attack,
	defense,
	speed,
	types,
}) {
	return (
		<CardContent
			sx={{ backgroundColor: "rgba(52, 59, 66, 0.7)", color: "#fff" }}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
					fontSize: "10px",
					marginTop: "5px",
				}}
			>
				<Stats>
					<BoltIcon />
					<p style={{ marginTop: "0px" }}>PW:{attack}</p>
				</Stats>
				<Stats>
					<ShieldIcon />
					<p style={{ marginTop: "0px" }}>DF:{defense}</p>
				</Stats>

				<Stats>
					<ShutterSpeedIcon />
					<p style={{ marginTop: "0px" }}>SP:{speed}</p>
				</Stats>
				<Stats>
					<SquareFootIcon />
					<p style={{ marginTop: "0px" }}>
						HT: {Math.round((height * 0.1 + Number.EPSILON) * 100) / 100} m
					</p>
				</Stats>
				<Stats>
					<ScaleIcon />
					<p style={{ marginTop: "0px" }}>
						WT:{Math.round((weight * 0.1 + Number.EPSILON) * 100) / 100} Kg
					</p>
				</Stats>
			</div>
			<Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
				{types?.map((type, index) => {
					return (
						<Chip
							key={index}
							label={type}
							variant="outlined"
							style={{ color: "#fff" }}
						/>
					);
				})}
			</Stack>
		</CardContent>
	);
}
