import React from 'react';
import { toast } from "react-toastify";
import { useAppContext } from "../../contexts/TransactionContext";

import { Loader } from "../index";

export default function ConnectButton ()
{
    const { handleWalletConnect, hasMetaMask } = useAppContext();
    
    async function connect ()
    {
        const connectionStatus = await handleWalletConnect();
        if ( !connectionStatus ) return;
        
        
    }

    async function displayMessage ()
    {
        toast.error( "Please Install Meta Mask on your PC" );
    }

  return (
      <div>
         
          <button
              onClick={ hasMetaMask ? connect : displayMessage }
             
              className='bg-black rounded-lg px-7 py-2 text-white'
          >
              <span className="hidden md:block pr-3 text-xl">Connect Wallet</span>
            
              </button>

      </div>
  )
}
