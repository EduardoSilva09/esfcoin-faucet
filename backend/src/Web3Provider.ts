import Web3 from "web3";
const ABI = require("./abi.json")
const web3 = new Web3(`${process.env.NODE_URL}`)

const account = web3.eth.accounts.privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`)
web3.eth.accounts.wallet.add(account);

/**
 * Mints tokens and transfers them to the specified recipient address.
 * Uses a smart contract defined by ABI and CONTRACT_ADDRESS environment variables.
 * Sends the transaction using the WALLET environment variable as the sender.
 * @param to The Ethereum address to which the minted tokens should be transferred.
 * @returns Promise resolving to the transaction hash of the minting transaction.
 * @throws Error if there's an issue with contract instantiation or transaction sending.
 */
export async function mintAndTransfer(to: string): Promise<string> {
  const contract = new web3.eth.Contract(ABI, `${process.env.CONTRACT_ADDRESS}`, {
    from: `${process.env.WALLET}`
  });
  const tx = await contract.methods.mint(to).send();
  return tx.transactionHash;
}