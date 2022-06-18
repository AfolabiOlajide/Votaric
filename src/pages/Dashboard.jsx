import React, { useContext } from "react";

import CryptoData from "../components/CryptoData/CryptoData";
import NFTData from "../components/NFTData/NFTData";
import VotaricContext from "../context/VotaricStore";

const Dashboard = () => {
	const { cryptocurrencyData, nftData, address } = useContext(VotaricContext);

	console.log(cryptocurrencyData);
	console.log(nftData);
	return (
		<div>
			<div className="">Dashboard</div>
			<div className="">{address}</div>
			<div className="">
				{cryptocurrencyData.map((data, index) => (
					<CryptoData key={index} data={data} />
				))}
			</div>
			<div className="">
				{nftData.map((data, index) => (
					<NFTData key={index} data={data} />
				))}
			</div>
		</div>
	);
};

export default Dashboard;
