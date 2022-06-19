import React from "react";

import Card from "../../UI/Card";
import "./Proposal.css";

const Proposal = ({ id, description, status }) => {
	let color;
	if (status === "passed") {
		color = "green";
	} else if (status === "rejected") {
		color = "red";
	} else {
		color = "orange";
	}

	return (
		<Card className="proposal">
			<div className="proposal-desc">
				<h3 className="heading">{description}</h3>
				<span className="id">#{id}</span>
			</div>
			<div className={`${color} status`}>{status}</div>
		</Card>
	);
};

export default Proposal;
