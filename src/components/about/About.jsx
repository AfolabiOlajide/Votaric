import React from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import "./About.css";

const About = () => {
	return (
		<Card className="about">
			<h1>
				What is <span>VOTARIC</span>
			</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Inventore repudiandae assumenda blanditiis harum. Dolor a quos
				necessitatibus sunt nobis fuga, tempore nulla fugit maiores
				voluptas.
			</p>
			<Button className="primary">Become A Member</Button>
		</Card>
	);
};

export default About;
