const hre = require("hardhat");

async function main() {
  
  const TiredPunksNFT = await hre.ethers.getContractFactory("TiredPunksNFT");
  const tiredPunksNFT = await TiredPunksNFT.deploy();

  await tiredPunksNFT.deployed();

  console.log("TiredPunksNFT deployed to:", tiredPunksNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
