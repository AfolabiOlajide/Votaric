import React from "react";

const VotaricContext = React.createContext({
	address: "",
	setAddress: () => {},
	cryptocurrencyData: [],
	nftData: [],
	setCryptocurrencyData: () => {},
	setNftData: () => {},
	isLoading: false,
	setIsLoading: () => {},
	proposals: [],
	setProposals: () => {},
	votesUp: 0,
	setVotesUp: () => {},
	votesDown: 0,
	setVotesDown: () => {},
	totalVotes: 0,
	setTotalVotes: () => {},
});

export default VotaricContext;
