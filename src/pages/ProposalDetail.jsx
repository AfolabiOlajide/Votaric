import React, { useContext } from "react";
import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import Proposal from "../components/proposal/Proposal";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./ProposalDetail.css";
import VotaricContext from "../context/VotaricStore";
import BnToInt from "../api/bnToInt";
// import Votaric from '../Votaric.json'

// const dummy_votes = [
// 	{
// 		address: "0xA90E1a6A5c00CE8d327F4aAE4fD1c5Cb9c5Ce230",
// 		vote: true,
// 	},
// 	{
// 		address: "0xA90E1a6A5c00CE8d327F4aAE4fD1c5Cb9c5Ce230",
// 		vote: false,
// 	},
// 	{
// 		address: "0xA90E1a6A5c00CE8d327F4aAE4fD1c5Cb9c5Ce230",
// 		vote: true,
// 	},
// 	{
// 		address: "0xA90E1a6A5c00CE8d327F4aAE4fD1c5Cb9c5Ce230",
// 		vote: true,
// 	},
// 	{
// 		address: "0xA90E1a6A5c00CE8d327F4aAE4fD1c5Cb9c5Ce230",
// 		vote: false,
// 	},
// ];

const ProposalDetail = () => {
	const ctx = useContext(VotaricContext);
	const [answer, setAnswer] = useState();
	let color;

	if (answer === true) {
		color = "green";
	} else if (answer === false) {
		color = "red";
	}

	const voteYes = () => setAnswer(true);
	const voteNo = () => setAnswer(false);

	const { id } = useParams();
	const proposal = ctx.proposals.find((p) => BnToInt(p.id) == id); // eslint-disable-line

	if (proposal === undefined) {
		return <Navigate to="/404" />;
	}

	return (
		<div className="proposal-detail">
			<Proposal
				id={proposal.id}
				description={proposal.description}
				status={proposal.passed}
				voteFor={proposal.votesUp}
				voteAgainst={proposal.votesDown}
				countsConducted={proposal.countsConducted}
			/>
			{/* <h3>
				Proposer:{" "}
				<span className="color-grey">
					0xA90E1a6A5c00CE8d327F4aAE4fD1c5Cb9c5Ce230
				</span>
			</h3> */}

			<div className="vote">
				<Card
					className={`yes ${answer === true && color}`}
					onClick={voteYes}
				>
					Vote Yes
				</Card>
				<Card
					className={`no ${answer === false && color}`}
					onClick={voteNo}
				>
					Vote No
				</Card>
			</div>
			<Button className="primary">Make your vote</Button>
			{/* <div className="previous-votes">
				<h3>Previous Votes</h3>
				{dummy_votes.map((vote, index) => (
					<Card
						key={index}
						className={`${vote.vote ? "green" : "red"} past-vote`}
					>
						{vote.address}
					</Card>
				))}
			</div> */}
		</div>
	);
};

export default ProposalDetail;
