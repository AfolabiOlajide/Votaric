import React from "react";
import { Link } from "react-router-dom";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import "./AboutProposal.css";

const AboutProposal = () => {
	return (
		<Card className="about-proposal">
			<h1>Create and Propose</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Sapiente voluptatum incidunt fuga soluta, tenetur optio aperiam
				cupiditate nemo minus in iure! Amet quod ducimus voluptatum
				aperiam blanditiis repellendus recusandae et?
			</p>
			<Link to="/proposals">
				<Button className="primary">View Proposals</Button>
			</Link>
		</Card>
	);
};

export default AboutProposal;
