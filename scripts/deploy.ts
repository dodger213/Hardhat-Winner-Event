import { ethers } from 'hardhat'

async function main() {
  const [deployer] = await ethers.getSigners();

  const EventWinner = await ethers.getContractFactory("EventWinner");
  const eventWinner = await EventWinner.deploy();
  await eventWinner.waitForDeployment();
  
  console.log(`EventWinner deployed to: ${await eventWinner.getAddress()}`);

  const winnerContractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
  const tx = await eventWinner.callWinner(winnerContractAddress);

  console.log("Transaction hash:", tx.hash);
  // const receipt = await tx.wait();
  // if (receipt) {
  //   console.log("Transaction status:", receipt.status === 1 ? "Success" : "Failed");
  // }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exitCode = 1
  })
