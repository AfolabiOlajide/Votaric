import React, { useContext } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { connectAccount } from "../../api/walletConnect";
import fetchBalances from "../../api/FetchBalances";
import VotaricContext from "../../context/VotaricStore";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./Nav.css";
import Button from "../../UI/Button";
import { useState } from "react";

const Nav = () => {
	const [isActive, setIsActive] = useState(false);
	const changeActiveStateHandler = () => {
		setIsActive(!isActive);
	};
	let activeStyle = {
		background: "#c9e265",
	};
	const ctx = useContext(VotaricContext);

	const connectWalletHandler = async () => {
		const connected = await connectAccount();
		ctx.setAddress(connected.address);
		ctx.setIsLoading(connected.status);
		const dashBoardData = await fetchBalances(
			connected.address,
			ctx.chainId
		);
		ctx.setCryptocurrencyData(dashBoardData.cryptocurrencyData);
		ctx.setNftData(dashBoardData.nftData);
		ctx.setIsLoading(false);
	};

	return (
		<div className="nav">
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className={`links ${isActive ? "active" : ""}`}>
				<div className="closebtn">
					<AiOutlineClose onClick={changeActiveStateHandler} />
				</div>
				<div className="link">
					<NavLink
						to="/"
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
						onClick={changeActiveStateHandler}
					>
						Home
					</NavLink>
				</div>
				<div className="link">
					<NavLink
						to="/proposals"
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
						onClick={changeActiveStateHandler}
					>
						Proposals
					</NavLink>
				</div>
				<div className="link">
					<NavLink
						to="/dashboard"
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
						onClick={changeActiveStateHandler}
					>
						Dashboard
					</NavLink>
				</div>
			</div>
			<div className="connect">
				{ctx.address.trim().length > 1 ? (
					<Button className="secondary normal-text">{`${ctx.address.substring(
						0,
						6
					)}...${ctx.address.substring(35)}`}</Button>
				) : (
					<Button
						onClick={connectWalletHandler}
						className="primary normal-text"
					>
						Connect Wallet
					</Button>
				)}
				<div className="openbtn">
					<BiMenuAltLeft onClick={changeActiveStateHandler} />
				</div>
			</div>
		</div>
	);
};

export default Nav;
