import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

import "./UserDashboard.css";

const UserDashboard = () => {
	return (
		<Card className="home-section">
			<h1 className="heading">DashBoard</h1>
			<p>
				Dashboard offered to users to be able to view token balance and
				NFT balances if available, made possible by querying the
				Covalent API.
			</p>
			<p>
				As querying the API takes time you might have to wait a little
				before the balances are displayed.
			</p>
			<Link to="/dashboard" className="max-content">
				<Button className="primary">Check Dashboard</Button>
			</Link>
		</Card>
	);
};

export default UserDashboard;
