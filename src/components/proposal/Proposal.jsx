import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import Card from "../../UI/Card";
import "./Proposal.css";

const Proposal = ({ id, description, status, voteFor, voteAgainst }) => {
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
			<div className="proposal-status">
				<div className={`${color} status`}>{status}</div>
				<div className="rate">
					<h4 className="for">
						{voteFor} <AiOutlineArrowUp />
					</h4>
					<h4 className="against">
						{voteAgainst} <AiOutlineArrowDown />
					</h4>
				</div>
			</div>
		</Card>
	);
};

export default Proposal;
