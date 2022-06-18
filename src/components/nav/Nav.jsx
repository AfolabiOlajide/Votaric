import React, { useContext } from "react";
import { connectAccount } from "../../api/walletConnect";
import VotaricContext from "../../context/VotaricStore";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./Nav.css";
import Button from "../../UI/Button";

const Nav = () => {
	let activeStyle = {
		background: "#c9e265",
	};
	const ctx = useContext(VotaricContext);

	const connectWalletHandler = async () => {
		const connected = await connectAccount();
		ctx.setAddress(connected.address);
		const dash = await ctx.callDashboardData();
	};
	// const loadDataHandler = async () => {
	// 	await ctx.callDashboardData();
	// };
	return (
		<div className="nav">
			<div className="logo">
				<img src={logo} alt="" />
			</div>
			<div className="links">
				<div className="link">
					<NavLink
						to="/"
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
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
						// onClick={loadDataHandler}
					>
						Dashboard
					</NavLink>
				</div>
			</div>
			{ctx.address.trim().length > 1 ? (
				<Button className="secondary">{`${ctx.address.substring(
					0,
					6
				)}...${ctx.address.substring(35)}`}</Button>
			) : (
				<Button onClick={connectWalletHandler} className="primary">
					Connect Wallet
				</Button>
			)}
		</div>
	);
};

export default Nav;
