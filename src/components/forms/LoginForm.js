import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../../redux/actions/auth/login";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
		const formData = {
			email: data.get("email"),
            password: data.get("password"),
		};
		dispatch(LoginRequest(formData))
        .then((res) => {
			if (res.payload.status) {
				navigate("/home");
			} else {
				alert("Error al iniciar sesión, intente nuevamente.");
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
				Login Account
			</Typography>
			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
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
					Login Now
				</Button>
				<Grid container>
					<Grid item>
						<Link href="/register" variant="body2">
							{"Don't have an account? Signup now"}
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default LoginForm;
