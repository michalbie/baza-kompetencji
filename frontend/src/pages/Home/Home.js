import { Button } from "@mui/material";
import * as React from "react";
import { makeRequest } from "src/utils/makeRequest";

export const Home = () => {
	return (
		<div>
			<h1>Welcome to the Home Page</h1>
			<p>This is the home page of our application.</p>
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					makeRequest("api/example", "GET")
						.then((response) => {
							console.log("API Response:", response);
						})
						.catch((error) => {
							console.error("API Error:", error);
						});
				}}
			>
				Example Api Call
			</Button>
		</div>
	);
};
