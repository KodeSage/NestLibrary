// Import of abi json file
import LibraryAbi from "../utilis/Library.json";
import { ethers } from "ethers";

const { ethereum } = window;

const Abi = LibraryAbi.abi;
const Address = '0x8c911824367B6C024D2915335980D8e0272D3C03';

export const createEthereumContract = () =>
{
    const provider = new ethers.providers.Web3Provider( ethereum );
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract( Abi, Address, signer );
    return transactionsContract;    
};
