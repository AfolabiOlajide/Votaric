import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Votaric from "./Votaric.json";
import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Proposals from "./pages/Proposals";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import ProposalDetail from "./pages/ProposalDetail";
import VotaricContext from "./context/VotaricStore";
import { MAINNET_CONTRACT_ADDRESS } from "./global";

const RPC =
	"https://polygon-mainnet.g.alchemy.com/v2/tFbocnvxaVLxTSCHCVuVHdoBINe_VVTG";

function App() {
	const ctx = useContext(VotaricContext);
	const getProposal = async () => {
		const provider = new ethers.providers.JsonRpcProvider(RPC);
		const votaricContract = new ethers.Contract(
			MAINNET_CONTRACT_ADDRESS,
			Votaric.abi,
			provider
		);
		ctx.setProposals([]);
		const proposal = await votaricContract.proposalCount();
		const totalVotesUp = await votaricContract.totalVotesUp();
		const totalVotesDown = await votaricContract.totalVotesDown();
		for (let i = 1; i < proposal.toNumber() + 1; i++) {
			const proposal = await votaricContract.proposals(i);
			if (proposal.exists === false) {
				continue;
			}
			ctx.setProposals((prevProposals) => [...prevProposals, proposal]);
			ctx.setVotesUp(totalVotesUp.toNumber());
			ctx.setVotesDown(totalVotesDown.toNumber());
		}
	};

	useEffect(() => {
		getProposal();
	}, []); // eslint-disable-line

	return (
		<div className="App">
			<Nav />
			<ToastContainer />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/proposals"
						element={<Proposals onLoad={getProposal} />}
					/>
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
