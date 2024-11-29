# EventWinner Smart Contract

A Solidity smart contract implementation that demonstrates external contract interaction on the Ethereum blockchain.

This is the answer to stackoverflow question: [Error: cannot estimate gas; transaction may fail or may require manual gas limit (Sepolia test Network)
](https://stackoverflow.com/questions/79231971/error-cannot-estimate-gas-transaction-may-fail-or-may-require-manual-gas-limit)

## Overview

The EventWinner project showcases a smart contract that can interact with other contracts through their interfaces. It implements a pattern for making external calls to contracts that expose an `attempt()` function.

## Technical Stack

- Solidity ^0.8.27
- Hardhat
- TypeScript
- Ethers.js

## Contract Architecture

### EventWinner.sol
The main contract contains:
- Interface definition for target contracts
- External function to interact with other contracts
- Low-level call implementation for robust contract interaction

### Key Features
- External contract interaction
- Interface-based calling
- Gas-efficient implementation
- Error handling

## Usage

The contract can be used to interact with any contract that implements the `attempt()` function:

```bash 
// Get contract instance
const eventWinner = await EventWinner.deploy();

// Call target contract
await eventWinner.callWinner(targetContractAddress);
```

## Development

1. Clone the repository
 ```bash
git clone https://github.com/BTC415/EventWinner.git
 ```
2. Install dependencies:
```bash
npm install
```
3. Compile contracts:
```bash
npx hardhat compile
```
4. Run deployment script:
```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

## Network support 

- Sepolia
- Local hardhat Network

## License
This project is licensed under the MIT License.