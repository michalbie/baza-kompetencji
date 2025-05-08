import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { makeRequest } from "src/utils/makeRequest";

const ProtectedRoute = ({ children }) => {
	const [isAuthorized, setIsAuthorized] = useState(null);

	const validateToken = async (token) => {
		const response = await makeRequest("api/token/verify/", "POST", { token: token });

		if (response.status === 200) {
			setIsAuthorized(true);
		} else {
			setIsAuthorized(false);
		}
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			validateToken(token);
		} else {
			setIsAuthorized(false);
		}
	}, []);

	if (isAuthorized === null) {
		return (
			<div sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
				<CircularProgress />
			</div>
		);
	}

	return isAuthorized ? <>{children}</> : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
