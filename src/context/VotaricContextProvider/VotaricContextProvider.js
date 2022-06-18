import React, { useState } from "react";

import VotaricStore from "../VotaricStore";
import fetchBalances from "../../api/FetchBalances";

const VotaricContextProvider = (props) => {
	const [address, setAddress] = useState("");
	const [chainId, setChainId] = useState(137);
	const [cryptocurrencyData, setCryptocurrencyData] = useState([]);
	const [nftData, setNftData] = useState([]);

	const callDashboardData = async () => {
		if (address !== "") {
			const data = await fetchBalances(address, chainId);
			console.log(data);
			setCryptocurrencyData(data.cryptocurrencyData);
			setNftData(data.nftData);
		} else {
			return;
		}
	};

	const fetchData = async () => {
		const API_KEY = "ckey_47958ac13e574573ab569f046e9";
		try {
			const response = await fetch(
				`https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${API_KEY}`
			);
			const responseData = await response.json();
			if (response.ok) {
				setAddress(responseData.data.address);
				setCryptocurrencyData(
					responseData.data.items.filter(
						(data) => data.type === "cryptocurrency"
					)
				);
				setNftData(
					responseData.data.items.filter(
						(data) => data.type === "nft"
					)
				);
			} else {
				console.log("there was an error");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<VotaricStore.Provider
			value={{
				address,
				setAddress,
				setChainId,
				cryptocurrencyData,
				nftData,
				callDashboardData,
				setCryptocurrencyData,
				setNftData,
				fetchData,
			}}
		>
			{props.children}
		</VotaricStore.Provider>
	);
};

export default VotaricContextProvider;
