import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { NotFound } from "../../pages/NotFound/NotFound";
import Login from "../../pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = ({ children }) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
