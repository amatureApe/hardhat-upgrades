const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  let box = await upgrades.upgradeProxy("ADDRESS", BoxV2);
  console.log("Your upgrade is done!", box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })