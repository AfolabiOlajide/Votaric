import React from "react";
import { useParams, Navigate } from "react-router-dom";

import Proposal from "../components/proposal/Proposal";
import { sampleProposal } from "../sampleProposals";

const ProposalDetail = () => {
	const { id } = useParams();
	const proposal = sampleProposal.find((p) => p.id === id);
	if (proposal === undefined) {
		return <Navigate to="/404" />;
	}
	return (
		<div className="proposal-detail">
			<Proposal
				id={proposal.id}
				description={proposal.description}
				status={proposal.status}
			/>
		</div>
	);
};

export default ProposalDetail;
