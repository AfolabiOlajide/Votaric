import React from "react";

import About from "../components/about/About";
import AboutProposal from "../components/about-proposal/AboutProposal";
import UserDashboard from "../components/userDashboard/UserDashboard";

const Home = () => {
	return (
		<div className="home">
			<About />
			<AboutProposal />
			<UserDashboard />
		</div>
	);
};

export default Home;
