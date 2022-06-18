import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

import "./UserDashboard.css";

const UserDashboard = () => {
	return (
		<Card className="home-section">
			<h1>DashBoard</h1>
			<p>
				Dashboard offered to users to be able to view token balances on
				different chains like Polygon, Ethereum, Binance Smart Chain
				etc. You can also view NFT assets if available.
			</p>
			<Link to="/dashboard" className="max-content">
				<Button className="primary">Check Dashboard</Button>
			</Link>
		</Card>
	);
};

export default UserDashboard;
