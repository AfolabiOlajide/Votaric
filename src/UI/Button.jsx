import React from "react";

import "./Button.css";

const Button = (props) => {
	return (
		<button
			type={props.type}
			onClick={props.onClick}
			className={`button ${props.className}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
