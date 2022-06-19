import React from "react";

const VotaricContext = React.createContext({
	address: "",
	chainId: "",
	setAddress: () => {},
	setChainId: () => {},
	cryptocurrencyData: [],
	nftData: [],
	setCryptocurrencyData: () => {},
	setNftData: () => {},
	isLoading: false,
	setIsLoading: () => {},
});

export default VotaricContext;
