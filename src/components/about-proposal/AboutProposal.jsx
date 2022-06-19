import React from "react";
import { Link } from "react-router-dom";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import "./AboutProposal.css";

const AboutProposal = () => {
	return (
		<Card className="about-proposal home-section">
			<h1 className="heading">Create or Propose</h1>
			<p>
				To be able to create or propose a proposal, you need to be a
				member of the community. Click on the button above to join the
				community and if you are already a member, you can create or
				vote for a proposal below.
			</p>
			<Link to="/proposals" className="max-content">
				<Button className="primary">View Proposals</Button>
			</Link>
		</Card>
	);
};

export default AboutProposal;
