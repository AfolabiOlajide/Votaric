import React from "react";
import { toast } from "react-toastify";
import { ethers } from "ethers";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import "./About.css";
import Votaric from "../../Votaric.json";

const CONTRACT_ADDRESS = "0x3E7180Bade2c4a40A9F73803CFCA07C178b29b93";

const About = () => {
	const becomeAMember = async (e) => {
		e.preventDefault();
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				CONTRACT_ADDRESS,
				Votaric.abi,
				signer
			);

			try {
				const response = await contract.addMember();
				toast.success("You are now a member", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				console.log(response.hash);
			} catch (error) {
				console.log(error.reason);
				toast.error(error.reason, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		}
	};

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
			<Button className="primary" onClick={becomeAMember}>
				Become A Member
			</Button>
		</Card>
	);
};

export default About;
