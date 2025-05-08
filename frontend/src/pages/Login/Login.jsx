import React, { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "src/utils/makeRequest";

const Login = () => {
	const navigate = useNavigate();
	const [identifier, setIdentifier] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const response = await makeRequest("api/token/", "POST", {
				username: identifier,
				password: password,
			});

			if (response.ok) {
				const json = await response.json();
				localStorage.setItem("token", json.access);
				navigate("/");
			} else {
				const errorData = await response.json();
				setError(errorData.detail || "Login failed. Please check your credentials.");
			}
		} catch (err) {
			setError(err.message || "An error occurred during login");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f0f0f0">
			<Box bgcolor="white" padding={8} borderRadius={8} boxShadow={3} width="100%" maxWidth="400px">
				<Typography variant="h2" fontWeight="bold" mb={6} color="#333">
					Login
				</Typography>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
							Email or Username
						</label>
						<TextField
							type="text"
							id="identifier"
							value={identifier}
							onChange={(e) => setIdentifier(e.target.value)}
							required
							fullWidth
							placeholder="Enter your email or username"
							disabled={loading}
							margin="normal"
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<TextField
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							fullWidth
							placeholder="Enter your password"
							disabled={loading}
							margin="normal"
						/>
					</div>
					<Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
						{loading ? "Loading..." : "Login"}
					</Button>
				</form>
				{error && (
					<Alert severity="error" className="mt-4">
						<AlertTitle>Error</AlertTitle>
						{error}
					</Alert>
				)}
				<Typography variant="body2" color="textSecondary" className="mt-4">
					Don't have an account?{" "}
					<a href="/register" className="text-blue-500 hover:underline">
						Register
					</a>
				</Typography>
			</Box>
		</Box>
	);
};

export default Login;
