import React from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import "./About.css";

const About = () => {
	return (
		<Card className="about home-section">
			<h1 className="heading">
				What is <span>VOTARIC</span>
			</h1>
			<p>
				Votaric is a Decentralized Autonomous Organization that gives
				members the right to vote for what they want and need in the
				community. A community Driven Project, the members are the voice
				and majority carries the vote, as all data is being stored on
				the BlockChain it leaves the door open to transparency.
			</p>
			<p>Votaric was gotten from the Spanish word for vote (Votar).</p>
			<Button className="primary">Become A Member</Button>
		</Card>
	);
};

export default About;
