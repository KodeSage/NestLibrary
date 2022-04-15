
const hre = require("hardhat");

async function main() {

  const [ deployer ] = await hre.ethers.getSigners();

  console.log( "Deploying contracts with the account:", deployer.address );

  const weiAmount = ( await deployer.getBalance() ).toString();

  console.log( "Account balance:", ( await ethers.utils.formatEther( weiAmount ) ) );

  const Library_Contract = await hre.ethers.getContractFactory("Library");
  const lib_greeter = await Library_Contract.deploy("NESTLIBRARY");

  await lib_greeter.deployed();

  console.log( "Library_Contract deployed to:", lib_greeter.address ); //0x013f887991d492e1Eb5A0641e217AAb9dCaC79CA
}

const runMain = async () =>
{
  try
  {
    await main();
    process.exit( 0 );
  } catch ( error )
  {
    console.error( error );
    process.exit( 1 );
  }
}
runMain();
