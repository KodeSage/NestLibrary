import React from 'react';
import logo from './images/image 1.png'
import { Link } from "react-router-dom";

import { WalletButton } from "../components";
 
const Navbar = () =>
{

  return (
      <nav className="flex justify-around w-full mx-1 items-center">
        
     
     <Link to="/"> <div className='flex gap-4 items-center cursor-pointer'> 
             <img src={logo} alt="logo" /> 
        <span className="text-2xl font-bold"> NestLibrary</span>
      </div>
      </Link>
           
          
        <div>
            <ul className="flex gap-6 hover:cursor-pointer items-center">
            <li className=' hover:underline'>
                   Home
                </li>
                <li className="hover:underline">
                    Features
                </li>
                <li  className=' hover:underline'>
                   Contact
                </li>
                <li  className=' hover:underline'>
                    About us
                </li>
          <li>
              <WalletButton />
                </li>
            </ul>
        </div>

      </nav>
  );
}


export default Navbar;
