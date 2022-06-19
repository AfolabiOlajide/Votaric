import React, { useState } from "react";

import VotaricStore from "../VotaricStore";
// import fetchBalances from "../../api/FetchBalances";

const VotaricContextProvider = (props) => {
	const [address, setAddress] = useState("");
	const [chainId, setChainId] = useState(137);
	const [cryptocurrencyData, setCryptocurrencyData] = useState([]);
	const [nftData, setNftData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// const callDashboardData = async () => {
	// 	if (address !== "") {
	// 		const data = await fetchBalances(address, chainId);
	// 		console.log(data);
	// 		setCryptocurrencyData(data.cryptocurrencyData);
	// 		setNftData(data.nftData);
	// 	} else {
	// 		return;
	// 	}
	// };

	return (
		<VotaricStore.Provider
			value={{
				address,
				setAddress,
				chainId,
				setChainId,
				cryptocurrencyData,
				nftData,
				// callDashboardData,
				setCryptocurrencyData,
				setNftData,
				isLoading,
				setIsLoading,
			}}
		>
			{props.children}
		</VotaricStore.Provider>
	);
};

export default VotaricContextProvider;
