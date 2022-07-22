const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box, ProxyAdmin, and Proxy...");
  const proxy = await upgrades.deployProxy(Box, [42], { intializer: "store" });
  console.log("Proxy of Box deploye to:", proxy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })