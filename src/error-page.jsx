import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);
	return (
		<div id='error-page'>
			<h1>Oooops 😢</h1>
			<p>Sorry, Page not found.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};
export default ErrorPage;
