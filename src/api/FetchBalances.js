const fetchBalances = async (address) => {
	const API_KEY = "ckey_47958ac13e574573ab569f046e9";
	try {
		const response = await fetch(
			`https://api.covalenthq.com/v1/137/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${API_KEY}`
		);
		const responseData = await response.json();
		if (response.ok) {
			return {
				// address: responseData.data.address,
				cryptocurrencyData: responseData.data.items.filter(
					(data) => data.type === "cryptocurrency"
				),
				nftData: responseData.data.items.filter(
					(data) => data.type === "nft"
				),
			};
		} else {
			console.log("there was an error");
		}
	} catch (error) {
		console.log(error);
	}
};

export default fetchBalances;
