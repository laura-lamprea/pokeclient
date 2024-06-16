import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png";
import ash from "../../assets/images/ash.jpg";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

export default function Navbar(props) {
	const { user } = useSelector((state) => state.useUser);
	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar sx={{ backgroundColor: "#ef5350" }}>
					<Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
						<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
							<Avatar src={ash} />
							<Typography variant="h6" component="div">
								{user.username}
							</Typography>
						</div>
						<img
							src={logo}
							alt="POKEMON"
							style={{ height: 50 }}
						/>
						<div style={{ display: "flex", gap: "10px" }}>
							<Button variant="contained" component={Link} to="/favorites">
								Favoritos
							</Button>
							<Button variant="contained" color="secondary">Logout</Button>
						</div>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}
