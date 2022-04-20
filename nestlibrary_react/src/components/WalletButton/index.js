import React from 'react'
import ConnectButton  from "./ConnectButton";
import DisConnectButton  from "./DisConnectButton";
import { useAppContext } from "../../contexts/TransactionContext";
export default function WalletButton ()
{
    const { isConnected } = useAppContext();

  return (
      <div>
          {
              isConnected ? <DisConnectButton /> : <ConnectButton />
          }
      </div>
  )
}
