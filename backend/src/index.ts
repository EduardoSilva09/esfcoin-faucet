import dotenv from 'dotenv'
dotenv.config();

import { mintAndTransfer } from './Web3Provider';
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from 'cors';
import helmet from 'helmet';

const PORT: number = parseInt(`${process.env.PORT || 3001}`);
const app = express();
app.use(helmet());
app.use(morgan("tiny"));

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));

const nexMint = new Map<string, number>();

app.post("/mint/:wallet", async (req: Request, res: Response, next: NextFunction) => {
  const wallet = req.params.wallet;
  if (nexMint.has(wallet) && nexMint.get(wallet)! > Date.now()) {
    return res.status(400).json(`Try again tomorrow.`);
  }

  try {
    const tx = await mintAndTransfer(wallet);
    res.json(tx);
  } catch (error: any) {
    console.error(error);
    res.status(500).json(error.message)
  }
  const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
  nexMint.set(wallet, (Date.now() + ONE_DAY_IN_MS));
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))