import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterRequest } from "../../redux/actions/auth/register";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Typography from "@mui/material/Typography";
import { Alert, FormHelperText } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./validations/Shemas";

const SignupForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showAlert, setShowAlert] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = (data) => {
		const formData = {
			email: data.email,
			username: data.username,
			password: data.password,
		};
		dispatch(RegisterRequest(formData)).then((res) => {
			if (res.payload.status) {
				alert("Exito al registrarse, inicie sesión.");
				navigate("/login");
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
			<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
				<HowToRegIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Register
			</Typography>
			<Box
				component="form"
				noValidate
				onSubmit={handleSubmit(onSubmit)}
				sx={{ mt: 1, width: "500px" }}
			>
				<TextField
					margin="normal"
					required
					fullWidth
					id="username"
					label="Username"
					autoComplete="username"
					autoFocus
					{...register("username")}
					error={errors.username}
					helperText={errors.username?.message}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					autoComplete="email"
					autoFocus
					{...register("email")}
					error={errors.email}
					helperText={errors.email?.message}
				/>
				<FormControl variant="outlined" margin="normal" fullWidth>
					<InputLabel htmlFor="outlined-adornment-password">
						Password
					</InputLabel>
					<OutlinedInput
						// name="password"
						{...register("password")}
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
						error={errors.password}
						// helperText={errors.password?.message}
					/>
					{errors.password && (
						<FormHelperText sx={{ color: "#d32f2f" }}>
							{errors.password.message}
						</FormHelperText>
					)}
				</FormControl>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Register using your email
				</Button>
				<Grid container>
					<Grid item>
						<Link href="/login" variant="body2">
							{"Already have an account? Login now"}
						</Link>
					</Grid>
				</Grid>
				{showAlert && (
					<Alert
						severity="error"
						onClose={() => setShowAlert(false)}
						sx={{ mt: 3 }}
					>
						Something's gone wrong. Please try again.
					</Alert>
				)}
			</Box>
		</Box>
	);
};

export default SignupForm;
