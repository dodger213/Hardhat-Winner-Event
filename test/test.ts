const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
 // The address of the winner contract that we want to call
  const winnerContractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
  // Get the EventWinner contract factory from the hardhat config
  const EventWinner = await hre.ethers.getContractFactory("EventWinner");
  // Deploy the EventWinner contract to the blockchain
  const eventWinner = await EventWinner.deploy();

  // Wait for the contract to be deployed
  await eventWinner.deployed();

  // Log the address of the deployed contract to the console
  console.log(`contract is deployed to ${eventWinner.address}`);

  // Call the callWinner function of the EventWinner contract and pass in the address of the winner contract
 
  const tx = await eventWinner.callWinner(winnerContractAddress);
 
  // Wait for the transaction to be confirmed on the blockchain
  await tx.wait();
}

// Call the main function and catch any errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});