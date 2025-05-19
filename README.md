# Tier3 Token

This project is a basic implementation of an ERC20 token named Tier3 Token (TET). It uses the OpenZeppelin ERC20 contract and has a simple minting function.

## Setup

To setup the project, you need to have Node.js and npm installed. You can install the dependencies by running `npm install` in the root directory.

## Running the application locally

To run the application locally, follow these steps:

1. Start a local Ethereum node:
   ```
   npx hardhat node
   ```
   This command will initiate a local Ethereum network.

2. Open a new terminal and deploy your contract:
   ```
   npx hardhat run scripts/deploy.ts --network local
   ```
   This command deploys your contract to the local Ethereum network started in step 1.

3. Interact with your contract using Hardhat console:
   ```
   npx hardhat console --network local
   ```
   This command opens a console where you can interact with your deployed contract using JavaScript.

## Prerequisites or dependencies

The project requires the following dependencies:

* Node.js
* npm
* Hardhat
* OpenZeppelin ERC20 contract

## Assumptions or decisions made

The project assumes that the user has a basic understanding of Ethereum and smart contracts.

## Known issues or limitations

The project is a simple implementation and does not include any advanced features or security measures. It is not recommended to use this project in production without thorough testing and auditing.

