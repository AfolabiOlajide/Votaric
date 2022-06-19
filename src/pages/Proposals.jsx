import React from "react";

import Card from "../UI/Card";

import "./Proposals.css";

const Proposals = () => {
	return (
		<div className="proposals">
			<div className="widgets">
				<Card className="widget">
					<h3>Total Proposal</h3>
					<h1>23</h1>
				</Card>
				<Card className="widget">
					<h3>Total Proposal</h3>
					<h1>23</h1>
				</Card>
				<Card className="widget">
					<h3>Total Proposal</h3>
					<h1>23</h1>
				</Card>
			</div>
		</div>
	);
};

export default Proposals;
