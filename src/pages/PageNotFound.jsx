import React from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";
import "./PageNotFound.css";

const PageNotFound = () => {
	return (
		<Card className="page-not-found">
			<h1>404</h1>
			<h4>Page Not Found</h4>
			<Link to="/">
				<Button>Go Back Home</Button>
			</Link>
		</Card>
	);
};

export default PageNotFound;
