import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterRequest } from "../../redux/actions/auth/register";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

const SignupForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const formData = {
			email: data.get("email"),
			username: data.get("username"),
			password: data.get("password"),
		};
		dispatch(RegisterRequest(formData)).then((res) => {
			if (res.payload.status) {
				alert("Exito al registrarse, inicie sesión.");
				navigate("/login");
			} else {
				alert("Error al registrase, intente nuevamente.");
			}
		});
	};
	return (
		<Box
			sx={{
				my: 8,
				mx: 4,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Register
			</Typography>
			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="username"
					label="Username"
					name="username"
					autoFocus
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoFocus
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Register Now
				</Button>
				<Grid container>
					<Grid item>
						<Link href="/login" variant="body2">
							{"Already have an account? Login now"}
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default SignupForm;
