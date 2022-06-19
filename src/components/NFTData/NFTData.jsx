import React from "react";

import "./NFTData.css";
// ${props.data.nft_data[0].token_id}

const NFTData = (props) => {
	return (
		<div className="nft-data">
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
				Balance:{" "}
				<span className="color-grey">{props.data.balance}</span>
			</div>
		</div>
	);
};

export default NFTData;
