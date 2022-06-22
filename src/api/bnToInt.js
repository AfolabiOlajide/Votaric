import { utils } from "ethers";

const BnToInt = (value) => {
	const converted = Number(utils.parseUnits(value.toString(), "wei"));
	return converted;
};

export default BnToInt;
