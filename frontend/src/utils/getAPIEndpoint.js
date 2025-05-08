export const getAPIEndpoint = () => {
	if (process.env.REACT_APP_ENV === "development") {
		return "http://localhost:8000/";
	}
	return window.location.origin + "/";
};
