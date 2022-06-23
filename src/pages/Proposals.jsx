import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { toast } from "react-toastify";

import Proposal from "../components/proposal/Proposal";
import Card from "../UI/Card";
import Button from "../UI/Button";
import VotaricContext from "../context/VotaricStore";
import BnToInt from "../api/bnToInt";
import "./Proposals.css";
import Votaric from "../Votaric.json";

const CONTRACT_ADDRESS = "0x3E7180Bade2c4a40A9F73803CFCA07C178b29b93";

const Proposals = () => {
	const [writtenProposal, setWrittenProposal] = useState("");
	const ctx = useContext(VotaricContext);

	const textAreaChangeHandler = (e) => {
		setWrittenProposal(e.target.value);
	};

	async function writeProposal(e) {
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
				const response = await contract.createProposal(writtenProposal);
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
		setWrittenProposal("");
	}

	return (
		<div className="proposals">
			<div className="widgets">
				<Card className="widget">
					<h3 className="heading">Total Proposal</h3>
					<h1 className="purple">{ctx.proposals.length}</h1>
				</Card>
				<Card className="widget">
					<h3 className="heading">Total Votes Up</h3>
					<h1 className="for">{ctx.votesUp}</h1>
				</Card>
				<Card className="widget">
					<h3 className="heading">Total Votes Down</h3>
					<h1 className="against">{ctx.votesDown}</h1>
				</Card>
			</div>
			<Card className="new-proposal">
				<h3 className="heading">Make A Proposal</h3>
				<form>
					<textarea
						name="new-proposal"
						placeholder="Propose an Idea"
						onChange={textAreaChangeHandler}
						value={writtenProposal}
					></textarea>
					<Button className="primary" onClick={writeProposal}>
						Submit
					</Button>
				</form>
			</Card>
			<div className="proposal-list">
				{ctx.proposals.length > 0 &&
					ctx.proposals.map((proposal) => (
						<Link
							key={BnToInt(proposal.id)}
							to={`/proposal/${BnToInt(proposal.id)}`}
							className="proposal-link"
						>
							<Proposal
								id={proposal.id}
								description={proposal.description}
								status={proposal.passed}
								voteFor={proposal.votesUp}
								voteAgainst={proposal.votesDown}
								countsConducted={proposal.countsConducted}
							/>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Proposals;
