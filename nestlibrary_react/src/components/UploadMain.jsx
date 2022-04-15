import React, {useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import { createEthereumContract } from '../utilis/constants';
import { create } from "ipfs-http-client";

const client = create( "https://ipfs.infura.io:5001/api/v0" );
export default function UploadMain ()
{
    const [ buffer, setBuffer ] = useState();
    const [ selectValue, setSelectValue ] = useState( 'private' );
 
    const handleChange = ( event ) =>
    {
        setSelectValue( event.target.value )

    }

    const capturefile = ( e ) =>
    {
        const file = e.target.files[ 0 ];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer( file );
        reader.onloadend = () =>
        {
            setBuffer( Buffer( reader.result ) );
        }
        e.preventDefault();
    }

    const UploadFile = async ( e ) =>
    {

        e.preventDefault();
        try
        {
                const eth = createEthereumContract();
                const created = await client.add( buffer );
            // console.log( created.path );
            
                await eth.addFile( created.path, selectValue )
        } catch ( error )
        {
            console.log( error.message );
        }
    };

    useEffect( () =>
    {

       
    }, [] );


    return (
        <div className="m-20 p-20">
            <div className="p-8 rounded-lg bg-nestbackground">
                <h2 className="text-center text-4xl font-bold">UPLOAD YOUR FILES TO THE BLOCKCHAIN</h2>
                <form onSubmit={ UploadFile}>
                    <input type="file" aria-label="label" className="w-full bg-nestbackground outline outline-2  outline-offset-2 rounded-sm m-4 " onChange={ capturefile} />
                    <div className="flex gap-2 item-center">
                        <select
                            value={ selectValue }
                            onChange={ handleChange }
                        >
                            <option value="private">Private</option>
                            <option value="public">Public</option>
                        </select>
                    </div>
                    <div className="flex item-center justify-center">
                        <button className='bg-black p-3 w-80 rounded-lg text-white text-2xl font-bold' type='submit'>Upload</button>
                    </div>
                </form>
            </div>
            <div className='mt-10 p-8 rounded-lg bg-nestbackground'>
                <h2 className="text-center text-xl font-bold mb-8">Public Files</h2>
                <table className="table-auto justify-center">
                    <thead>
                        <tr>
                            <th scope="col" style={ { width: '200px' } }>Name</th>
                            <th scope="col" style={ { width: '230px' } }> Description</th>
                            <th scope="col" style={ { width: '230px' } }> Type</th>
                            <th scope="col" style={ { width: '120px' } }>Uploader</th>
                            <th scope="col" style={ { width: '120px' } }>IPFS HASH</th>
                        </tr>
                    </thead>
                </table>

            </div>
            <div className='mt-10 p-8 rounded-lg bg-nestbackground'>
                <h2 className="text-center text-xl font-bold mb-8">Private Files</h2>
                <table className="table-auto justify-center">
                    <thead>
                        <tr>
                            <th scope="col" style={ { width: '200px' } }>Name</th>
                            <th scope="col" style={ { width: '230px' } }> Description</th>
                            <th scope="col" style={ { width: '230px' } }> Type</th>
                            <th scope="col" style={ { width: '120px' } }>Uploader</th>
                            <th scope="col" style={ { width: '120px' } }>IPFS HASH</th>
                        </tr>
                    </thead>
                </table>

            </div>
            <div className='mt-10 p-8 rounded-lg bg-nestbackground'>
                <h2 className="text-center text-xl font-bold mb-8">Shared Files</h2>
                <table className="table-auto justify-center">
                    <thead>
                        <tr>
                            <th scope="col" style={ { width: '200px' } }>Name</th>
                            <th scope="col" style={ { width: '230px' } }> Description</th>
                            <th scope="col" style={ { width: '230px' } }> Type</th>
                            <th scope="col" style={ { width: '120px' } }>Uploader</th>
                            <th scope="col" style={ { width: '120px' } }>IPFS HASH</th>
                        </tr>
                    </thead>
                </table>

            </div>

        </div>
    )
}
