import { toast } from "react-toastify";
import
    {
        createContext,
        useContext,
        useState,
        useEffect,
        useCallback,
} from "react";
import
    {
        connectToMetaMask,
        listenToAccountChanges,
        hasEthereum,
        unmountEthListeners,
        listenToNetworkChanges,
    } from "../services/web3service";
import { useNavigate } from "react-router-dom";

import {createEthereumContract} from "../utilis/constants";


export const TransactionContext = createContext();


export const TransactionProvider = ( { children } ) =>
{

    const [ isInitiallyFetched, setIsInitiallyFetched ] = useState( false );
    const [ isConnected, setIsConnected ] = useState( false );
    const [ hasMetaMask, setHasMetaMask ] = useState( true );
    const [ address, setAddress ] = useState( false );
    const [ isLoading, SetLoading ] = useState( false );
    const navigate = useNavigate();
   
 
    const handleWalletConnect = useCallback( () =>  //For Handling Wallet Connections
    {
        return ( async () =>
        {
            const address = await connectToMetaMask();
            
            if ( !address )
            {
                return toast.error( "Connection Unsuccesful" )

            } else
            {
                toast.success( "Connected to MetaMask" );
                navigate( "/upload" );
            }
            
            
            SetLoading( true );
            setIsConnected( true );
            setAddress( address );

            localStorage.setItem( "wallet-connection", true );
            SetLoading( false );
            
            return true;

            
        } )();
    }, [] );

    const resetValues = useCallback( () =>
    {
        return ( async () =>
        {
            setIsConnected( true );

            localStorage.setItem( "wallet-connection", true );

            return true;
        } )();
    }, [] );

    const handleWalletDisconnect = () =>
    {
        setIsConnected( false );
        if (localStorage.removeItem( "wallet-connection" ));
        toast.error( "Disconnected from Metamask" );
        window.location.reload();
        
    };

    const handleAccountChanged = ( address ) =>
    {
        if ( !address ) return handleWalletDisconnect();
        resetValues();
    };
   
    const handleNetworkChanged = () =>
    {
        resetValues();
    };

    useEffect( () =>
    {
        if ( !isInitiallyFetched ) return;

        if ( !hasEthereum() ) return;
        listenToAccountChanges( handleAccountChanged );
        listenToNetworkChanges( handleNetworkChanged );
        return unmountEthListeners();
    } );

    useEffect( () =>
    {
        if ( isInitiallyFetched ) return;
        if ( !hasEthereum() )
        {
            console.log( "Please Install Meta Mask" );
            return setHasMetaMask( false );
        }
        const isInjected = localStorage.getItem( "wallet-connection" );
        if ( !isInjected ) return setIsInitiallyFetched( true );

        handleWalletConnect();
        setIsInitiallyFetched( true );
        return;
    }, [ handleWalletConnect, isInitiallyFetched ] );


    return (
        <TransactionContext.Provider value={ {
            isConnected,
            setIsConnected,
            handleWalletConnect,
            handleWalletDisconnect,
            hasMetaMask,
            address,
            isLoading,
        } }>
            { children }
        </TransactionContext.Provider> );
}

export function useAppContext ()
{
    const context = useContext(TransactionContext);

    if ( !context ) throw new Error( "useApp must be used inside a `AppProvider`" );

    return context;
}
