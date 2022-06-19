import React from "react";
import { Link } from "react-router-dom";

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
					<Link
						key={proposal.id}
						to={`/proposal/${proposal.id}`}
						className="proposal-link"
					>
						<Proposal
							id={proposal.id}
							description={proposal.description}
							status={proposal.status}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Proposals;
