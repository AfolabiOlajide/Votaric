import React from "react";

import { sampleProposal } from "../sampleProposals";
import Proposal from "../components/proposal/Proposal";
import Card from "../UI/Card";

import "./Proposals.css";

const Proposals = () => {
	return (
		<div className="proposals">
			<div className="widgets">
				<Card className="widget">
					<h3 className="heading">Total Proposal</h3>
					<h1>23</h1>
				</Card>
				<Card className="widget">
					<h3 className="heading">Total Proposal</h3>
					<h1>23</h1>
				</Card>
				<Card className="widget">
					<h3 className="heading">Total Proposal</h3>
					<h1>23</h1>
				</Card>
			</div>
			<div className="proposal-list">
				{sampleProposal.map((proposal) => (
					<Proposal
						key={proposal.id}
						id={proposal.id}
						description={proposal.description}
						status={proposal.status}
					/>
				))}
			</div>
		</div>
	);
};

export default Proposals;
