import React, { useEffect, useState } from "react";



import { useNavigate } from "react-router-dom";

const { ethereum } = window;


export const TransactionContext = React.createContext();





export const TransactionProvider = ( { children } ) =>
{
    const navigate = useNavigate();
    const [ currentAccount, setCurrentAccount ] = useState( "" );
    const [ isLoading, SetLoading ] = useState( false );
   


  
    

    const checkIfWalletIsConnect = async () =>
    {
        try
        {
            if ( !ethereum ) return alert( "Please install MetaMask." );
            const accounts = await ethereum.request( { method: "eth_accounts" } );
            // console.log( accounts );

            if ( accounts.length )
            {
                setCurrentAccount( accounts[ 0 ] );

            }
            else
            {
                window.reload();
                console.log( "No accounts found" );
            }
        } catch ( error )
        {
            console.log( error );

            throw new Error( "No ethereum object" );
        }

    };


    const connectWallet = async () =>
    {

        try
        {
            if ( !ethereum ) return alert( "Please install MetaMask." );
            SetLoading( true );
            const accounts = await ethereum.request( { method: "eth_requestAccounts", } );

            setCurrentAccount( accounts[ 0 ] );

            navigate( '/upload' )
            SetLoading( false );

        } catch ( error )
        {
            console.log( error );

            throw new Error( "No ethereum object" );
        }
        SetLoading( false );
    };

    const disconnect = async () =>
    {
        try
        {
            // if ( ethereum ) return alert( "Please instal MetaMask." );
            await ethereum.request( { method: "eth_requestAccounts", } );

            setCurrentAccount( " " )
            window.location.reload();
        } catch ( error )
        {
            console.log( error );

            throw new Error( "No ethereum object" );
        }
    }

    useEffect( () =>
    {
        checkIfWalletIsConnect();
    }, [] );

    return (
        <TransactionContext.Provider value={ {
            connectWallet,
            currentAccount,
            disconnect,
            isLoading,
        } }>
            { children }
        </TransactionContext.Provider> );
}
