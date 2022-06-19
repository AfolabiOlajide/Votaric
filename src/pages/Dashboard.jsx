import React, { useContext } from "react";
import { BallTriangle } from "react-loader-spinner";

import "./Dashboard.css";
import CryptoData from "../components/CryptoData/CryptoData";
import NFTData from "../components/NFTData/NFTData";
import VotaricContext from "../context/VotaricStore";
import Card from "../UI/Card";

const Dashboard = () => {
	const { cryptocurrencyData, nftData, address, isLoading } =
		useContext(VotaricContext);

	// console.log(cryptocurrencyData);
	// console.log(nftData);
	return (
		<div className="dashboard">
			<h2 className="heading">User Dashboard</h2>
			<p className="address">
				{address ? (
					address
				) : (
					<span className="color-red">Connect Your Wallet</span>
				)}
			</p>
			{isLoading ? (
				<div className="loading">
					<BallTriangle
						height="BallTriangle"
						width="100"
						color="#CB6CE6"
						ariaLabel="loading"
					/>
					<p>
						Getting User Tokan Balances <br /> This might take some
						time
					</p>
				</div>
			) : (
				<div className="dashboard-data">
					<div>
						<Card className="crypto-data">
							<h3 className="heading">Tokens</h3>
							{cryptocurrencyData.length < 1 ? (
								<p>No Available Data</p>
							) : (
								cryptocurrencyData.map((data, index) => (
									<CryptoData key={index} data={data} />
								))
							)}
						</Card>
						<Card className="NFT-data">
							<h3 className="heading">NFTs</h3>
							{nftData.length < 1 ? (
								<p>No Available Data</p>
							) : (
								nftData.map((data, index) => (
									<NFTData key={index} data={data} />
								))
							)}
						</Card>
					</div>
				</div>
			)}
			{/* <div className="">
				{cryptocurrencyData.map((data, index) => (
					<CryptoData key={index} data={data} />
				))}
			</div>
			<div className="">
				{nftData.map((data, index) => (
					<NFTData key={index} data={data} />
				))}
			</div> */}
		</div>
	);
};

export default Dashboard;
