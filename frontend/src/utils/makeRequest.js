import { getAPIEndpoint } from "./getAPIEndpoint";

export async function makeRequest(url, method = "GET", data = null) {
	const token = localStorage.getItem("token"); // Assumes token is stored under 'access'

	const headers = {
		"Content-Type": "application/json",
	};

	if (token) {
		headers["Authorization"] = `Bearer ${token}`;
	}

	const config = {
		method,
		headers,
	};

	if (data) {
		config.body = JSON.stringify(data);
	}

	try {
		const response = await fetch(`${getAPIEndpoint()}${url}`, config);

		if (response.status === 401) {
			// Handle token expiration or unauthorized access
			localStorage.removeItem("token"); // Clear the token
			window.location.reload(); // Redirect to login or refresh the page
		}

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.detail || "Request failed");
		}

		return response;
	} catch (error) {
		console.error("API error:", error.message);
		throw error;
	}
}
