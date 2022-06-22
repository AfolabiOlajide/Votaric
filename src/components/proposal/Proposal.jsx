import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import BnToInt from "../../api/bnToInt";

import Card from "../../UI/Card";
import "./Proposal.css";

const Proposal = ({
	id,
	description,
	status,
	voteFor,
	voteAgainst,
	countsConducted,
}) => {
	let color;
	let statusText;
	if (status === true) {
		color = "green";
		statusText = "Passed";
	} else if ((status === false) & (countsConducted === true)) {
		color = "red";
		statusText = "Rejected";
	} else if ((status === false) & (countsConducted === false)) {
		color = "orange";
		statusText = "Ongoing";
	}
	const proposalId = BnToInt(id);
	let voteUp = BnToInt(voteFor);
	let voteDown = BnToInt(voteAgainst);

	return (
		<Card className="proposal">
			<div className="proposal-desc">
				<h3 className="heading">{description}</h3>
				<span className="id">#{proposalId}</span>
			</div>
			<div className="proposal-status">
				<div className={`${color} status`}>{statusText}</div>
				<div className="rate">
					<h4 className="for">
						{voteUp} <AiOutlineArrowUp />
					</h4>
					<h4 className="against">
						{voteDown} <AiOutlineArrowDown />
					</h4>
				</div>
			</div>
		</Card>
	);
};

export default Proposal;
