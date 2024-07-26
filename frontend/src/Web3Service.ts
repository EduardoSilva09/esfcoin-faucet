import Web3 from 'web3';
import axios from 'axios';

/**
 * Attempts to mint tokens for the authenticated user.
 * Checks if the user is eligible based on the last mint timestamp stored in localStorage.
 * Throws errors for conditions where minting is not allowed.
 * Uses Web3 to interact with the Ethereum blockchain via MetaMask.
 * Makes an API request to mint tokens for the user's Ethereum account.
 * @returns Promise resolving to the data returned from the API request.
 * @throws Error if the user has already minted tokens within the last 24 hours,
 * MetaMask is not detected, or no valid accounts are available.
 */
export async function mint() {
  const nextMint = localStorage.getItem("nextMint");
  if (nextMint && parseInt(nextMint) > Date.now()) {
    throw new Error(`You can't receive tokens twice in a day. Try again tomorrow.`);
  }

  if (!window.ethereum) {
    throw new Error('No Metamask found!');
  }

  const web3 = new Web3(window.ethereum);

  const accounts = await web3.eth.requestAccounts();

  if (!accounts || !accounts.length) {
    throw new Error('No account allowed!');
  }

  localStorage.setItem("wallet", accounts[0]);

  const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
  localStorage.setItem("nextMint", `${Date.now() + ONE_DAY_IN_MS}`);

  const response = await axios.post(`${process.env.REACT_APP_API_URL}/mint/${accounts[0]}`);

  return response.data;
}