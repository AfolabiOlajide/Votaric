import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

import "./UserDashboard.css";

const UserDashboard = () => {
	return (
		<Card>
			<h1>DashBoard</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
				temporibus aut laudantium harum nostrum illum ut eos odio
				possimus porro.
			</p>
			<Link to="/dashboard">
				<Button className="primary">Check Dashboard</Button>
			</Link>
		</Card>
	);
};

export default UserDashboard;
