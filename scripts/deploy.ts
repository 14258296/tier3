import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const TIER3 = await ethers.getContractFactory("TIER3");

  // Deploy the contract and wait for it to be mined
  const tier3 = await TIER3.deploy();

  // Wait for deployment (Ethers v6 automatically waits if you `await` deploy())
  await tier3.waitForDeployment();

  // Get the address of the deployed contract
  const address = await tier3.getAddress();

  console.log("TIER3 deployed to:", address);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
