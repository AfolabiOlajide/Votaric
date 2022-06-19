import React from "react";

import "./CryptoData.css";

const CryptoData = (props) => {
	function separator(numb) {
		var str = numb.toString().split(".");
		str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return str.join(".");
	}

	return (
		<div className="cryptoData">
			{/* <div className="">{props.data.contract_address}</div> */}
			<div className="">
				Name:{" "}
				<span className="color-grey">{props.data.contract_name}</span>
			</div>
			<div className="">
				Symbol:{" "}
				<span className="color-grey">
					{props.data.contract_ticker_symbol}
				</span>
			</div>
			<div className="balance">
				Token Balance:{" "}
				<span className="color-grey">{props.data.balance}</span>
			</div>
			<div className="value">
				Value:
				<span className="green-text">
					{" "}
					${separator(props.data.quote.toFixed(4))}
				</span>
			</div>
		</div>
	);
};

export default CryptoData;
