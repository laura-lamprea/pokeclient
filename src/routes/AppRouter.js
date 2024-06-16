import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../views/Home";
import FavoritePage from "../views/Favorites";
import LoginForm from "../components/forms/LoginForm";
import SignupForm from "../components/forms/SignupForm";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path="/home" element={<HomePage />} />
					<Route path="/favorites" element={<FavoritePage />} />
				</Route>
				<Route element={<PublicRoute />}>
					<Route path="/login" element={<LoginForm />} />
					<Route path="/register" element={<SignupForm />} />
					<Route path="*" element={<Navigate to="/login" replace />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
