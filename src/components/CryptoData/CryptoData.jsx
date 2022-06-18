import React from "react";

import "./CryptoData.css";

const CryptoData = (props) => {
	return (
		<div>
			<div className="">{props.data.contract_address}</div>
			<div className="">{props.data.contract_name}</div>
			<div className="">{props.data.contract_ticker_symbol}</div>
		</div>
	);
};

export default CryptoData;
