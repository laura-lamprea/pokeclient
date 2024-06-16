import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../../redux/actions/auth/login";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LoginIcon from '@mui/icons-material/Login';
import Typography from "@mui/material/Typography";
import { Alert } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showAlert, setShowAlert] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const formData = {
			email: data.get("email"),
			password: data.get("password"),
		};
		dispatch(LoginRequest(formData)).then((res) => {
			if (res.payload.status) {
				navigate("/home");
			} else {
				setShowAlert(true);
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
				<LoginIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Login Account
			</Typography>
			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width:"500px" }}>
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
				<FormControl variant="outlined" margin="normal" fullWidth>
					<InputLabel htmlFor="outlined-adornment-password">
						Password
					</InputLabel>
					<OutlinedInput
						name="password"
						label="Password"
						id="password"
						autoComplete="current-password"
						type={showPassword ? "text" : "password"}
						fullWidth
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={() => setShowPassword(!showPassword)}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
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
				{showAlert && (
					<Alert
						severity="error"
						onClose={() => setShowAlert(false)}
						sx={{ mt: 3 }}
					>
						Invalid credentials
					</Alert>
				)}
			</Box>
		</Box>
	);
};

export default LoginForm;
