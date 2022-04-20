import React from 'react';
import logo from './images/image 1.png';
import { useAppContext} from "../contexts/TransactionContext";
import { shortenAddress } from '../utilis/shortenAddress';
import { Link } from "react-router-dom";
import { WalletButton } from "../components";

export default function UploadNavBar ()
{
    const { address} = useAppContext();
  return (

      <nav className="flex justify-around w-full mx-1 items-center">
          <Link to="/"> <div className='flex gap-4 items-center cursor-pointer'>
              <img src={ logo } alt="logo" />
              <span className="text-2xl font-bold"> NestLibrary</span>
          </div>
          </Link>
          <div className='bg-nestbackground w-96 rounded-lg text-center'>
              { address ?
                  <div >
                      { shortenAddress( address ) }
                  </div>
                  : 
                  <div>
                      Wallet Address
                  </div>
             }
              
          </div>
          <WalletButton />
      </nav>
      
  )
}
