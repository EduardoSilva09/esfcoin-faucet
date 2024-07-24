# EsfCoin Faucet

## Overview
This project implements a simple faucet for distributing [ESFCoins](https://github.com/EduardoSilva09/esfcoin_BEP20) to users who connect their MetaMask wallet. Users can claim 1,000 coins daily by interacting with the interface.

## Features
- Connect MetaMask wallet to claim coins.
- Responsive design using Bootstrap for better user experience.
- Simple integration with a Solidity smart contract.

## Technologies Used
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [Solidity](https://soliditylang.org/)

## Installation

1. Clone the repository:
   
   ```sh
   https://github.com/EduardoSilva09/esfcoin-faucet.git
   ```
   
2. Install dependencies:

   ```sh
   npm install
   ```
   
3. Remember to configure the environment variables in the `.env` file
   
## Usage

1. Compile the smart contracts

   ```sh
   npm start
   ```

2. Open your web browser and go to `http://localhost:3000` to view the application.

## MetaMask Integration

Ensure you have [MetaMask](https://metamask.io/) installed in your browser. Click on "Connect MetaMask" to interact with the faucet.

## Acknowledgments
- [Bootstrap](https://getbootstrap.com/) for front-end styling.
- [OpenZeppelin](https://www.openzeppelin.com/) for [Solidity](https://soliditylang.org/) smart contract libraries.
