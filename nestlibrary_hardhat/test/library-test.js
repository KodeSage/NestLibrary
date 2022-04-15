const { ethers } = require("hardhat");
const { use, expect, assert } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe('Library Contract', () => {
    let owner;
    let addr0;
    let addr1;
   


    let library;

    beforeEach(async () => {
        [owner, addr0, addr1] = await ethers.getSigners();
        //console.log(owner, addr0, addr1)

        //Deploy Library Contract
        const Library = await ethers.getContractFactory('Library');
        library = await Library.deploy("NEST LIBRARY"); 
    });

    console.log(process.env);

    it("Upload File Successfully", async function () {
        let hash = 'gfhfdgfyd';
        let status = 'private';
    
    
        await contract.addFile(hash, status);
        
        
        expect(file['_hash']).to.be.equal(hash)
        expect(file['_status']).to.be.equal(private)
      });



      it("Gets a private file", async function () {
        let ipfsHash = 'gfhfdgfyd';
        let status = 'private';
    
        await contract.addFile(ipfsHash, status);
        
        await contract.Privatefile(count);
        
        expect(file['ipfsHash']).to.be.equal(ipfsHash)
        expect(file['_status']).to.be.equal(private)
      });

      it("Gets a public file", async function () {
        let ipfsHash = 'gfhfdgfyd';
        let status = 'public';
    
        await contract.addFile(ipfsHash, status);
        
        await contract.Privatefile(count);
        
        expect(file['ipfsHash']).to.be.equal(ipfsHash)
        expect(file['_status']).to.be.equal(public)
      });

      it("retrieves private file", async () => {
        const retrievePrivateFiles = await library.retrievePrivateVideos(Privatefile)
        assert.equal (retrievePrivateFiles.retrieved_hash, retrieved_hash, "Hash is correct")


        })

      it("retrieves public file", async () => {
            const retrieve_PublicFiles = await library.retrievePublicFiles(Publicfile)
            assert.equal (retrieve_PublicFiles.retrieved_hash, retrieved_hash, "Hash is correct")
            
            // It shod be continued but can't seem to figure it out
              })
    

    
    

});


describe ("Get shared Files", async () => {
    it("lists shared files", async () => {
    const sharedFile = await library.getSharedFile(shared_files)
    assert.equal (sharedFile.shared_hash, shared_hash, "Hash is correct")
    assert.equal(sharedFile.shared_hash, shared_by, "Sharer is correct")
      })
    })

