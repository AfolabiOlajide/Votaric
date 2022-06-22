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

//0x1952a179ec7835A5195726809971A90eA9d6D73e
