const hre = require("hardhat");

async function main() {
	const Votaric = await hre.ethers.getContractFactory("Votaric");
	const votaric = await Votaric.deploy();

	await votaric.deployed();

	console.log("Votaric deployed to:", votaric.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});

// contract deployment address :  0xf86C615E1c45F33a24a8Def86C94d213E876Cab7
