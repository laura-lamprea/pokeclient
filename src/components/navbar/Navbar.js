import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png";
import ash from "../../assets/images/ash.jpg";
import { Avatar } from "@mui/material";
import { Logout } from "../../redux/actions/auth/logout";

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
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(Logout());
		navigate("/login");
	};

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
						<img src={logo} alt="POKEMON" style={{ height: 50 }} />
						<div style={{ display: "flex", gap: "10px" }}>
							<Button variant="contained" component={Link} to="/favorites">
								Favoritos
							</Button>
							<Button
								variant="contained"
								color="secondary"
								onClick={handleLogout}
							>
								Logout
							</Button>
						</div>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}
