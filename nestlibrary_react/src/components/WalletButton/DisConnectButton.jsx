import React from 'react';
import { toast } from "react-toastify";
import { useAppContext } from "../../contexts/TransactionContext";


export default function DisConnectButton ()
{
    const { handleWalletDisconnect } = useAppContext();

    const handleDisconnect = () =>
    {
        handleWalletDisconnect();
    };
  return (
      <div>
          <button
              onClick={ handleDisconnect }
              className="bg-black p-2 w-60 rounded-lg text-white text-xl font-bold"
          >
              <span>Disconnect</span>
          </button>
    </div>
  )
}
