import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Proposals from "./pages/Proposals";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import ProposalDetail from "./pages/ProposalDetail";
import VotaricContext from "./context/VotaricStore";

function App() {
	const { callDashboardData, setCryptocurrencyData, setNftData, address } =
		useContext(VotaricContext);
	const getData = async () => {
		if (address.trim().length > 1) {
			const { cryptocurrencyData, nftData } = await callDashboardData();
			setCryptocurrencyData(cryptocurrencyData);
			setNftData(nftData);
		} else {
			return;
		}
	};

	useEffect(() => {
		getData();
	});

	return (
		<div className="App">
			<Nav />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/proposals" element={<Proposals />} />
					<Route path="/proposal/:id" element={<ProposalDetail />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/404" element={<PageNotFound />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
