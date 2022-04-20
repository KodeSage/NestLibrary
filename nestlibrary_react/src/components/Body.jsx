
import React  from 'react';
import logo from './images/image2.png';
import { WalletButton } from "../components";




const Body = () =>
{

  return (
  <div className='flex flex-row justify-center items-center mt-20'>

    <div className='w-1/3 h-1/3'>
        <img className='w-full h-full' src={logo} alt = "landing page" />
    </div>
    <div className=' mx-24 flex flex-col justify-center text-center'>
 
     <div className='text-[50px] w-[391px] text-center italic'>
        The best web3 storage platform in the world
       
     </div>
     
        <div>
           <WalletButton />
     </div>
   
     </div>
     </div>
   

);
}


export default Body;