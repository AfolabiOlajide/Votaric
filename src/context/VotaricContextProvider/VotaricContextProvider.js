import React, { useState } from "react";

import VotaricStore from "../VotaricStore";

const VotaricContextProvider = (props) => {
	const [address, setAddress] = useState("");
	const [cryptocurrencyData, setCryptocurrencyData] = useState([]);
	const [nftData, setNftData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [proposals, setProposals] = useState([]);
	const [votesUp, setVotesUp] = useState(0);
	const [votesDown, setVotesDown] = useState(0);
	const [totalVotes, setTotalVotes] = useState(0);

	return (
		<VotaricStore.Provider
			value={{
				address,
				setAddress,
				cryptocurrencyData,
				nftData,
				setCryptocurrencyData,
				setNftData,
				isLoading,
				setIsLoading,
				proposals,
				setProposals,
				votesUp,
				setVotesUp,
				votesDown,
				setVotesDown,
				totalVotes,
				setTotalVotes,
			}}
		>
			{props.children}
		</VotaricStore.Provider>
	);
};

export default VotaricContextProvider;
