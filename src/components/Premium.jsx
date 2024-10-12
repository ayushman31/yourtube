import {  useConnection, useWallet,  } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import React from "react";
import { Buffer } from 'buffer';
  import {
    
    WalletMultiButton,
  } from "@solana/wallet-adapter-react-ui";
  import "@solana/wallet-adapter-react-ui/styles.css";
import { useDispatch } from "react-redux";
import { buyPremium } from "../utils/premiumSlice";

window.Buffer = Buffer;

const Premium = () => {
    const dispatch = useDispatch()
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens() {
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey("9kohMWSmmN5xHtbaxSjDAEFE9s5Tiqn6vWWRiwgYScg1"),
            lamports: 0.00001 * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Purchase Successfull");

        dispatch(buyPremium());
    }
  return (
    
    <div className=" w-full  justify-center h-screen m-10 cursor-default">
      <div className="text-center m-20">
        <h1 className="font-bold text-7xl">All Yourtube.</h1>
        <h1 className="font-bold text-7xl">No Interruptions.</h1>
        <p className="mt-10 text-xl text-purple-500">Better UI, Dark Mode just with one click</p>
        <p className="text-gray-600">At just 0.5 SOL</p>
      </div>
      <div className="text-center m-20">
        
        <button onClick={ sendTokens } className="bg-purple-500 p-4 rounded-2xl text-white hover:bg-purple-600">Buy Now</button>
      </div>
      <WalletMultiButton />
    </div>
    
  );
};

export default Premium;
