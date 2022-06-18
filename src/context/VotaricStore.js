import React from "react";

const VotaricContext = React.createContext({
	address: "",
	setAddress: () => {},
	setChainId: () => {},
	cryptocurrencyData: [],
	nftData: [],
	callDashboardData: () => {},
	setCryptocurrencyData: () => {},
	setNftData: () => {},
	fetchData: () => {},
});

export default VotaricContext;
