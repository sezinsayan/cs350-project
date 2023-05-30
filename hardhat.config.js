/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
module.exports = {
  networks: {
    hardhat: {
      
    },
    ganache: {
      url: "http://localhost:7545", // Replace with the correct Ganache URL
      chainId: 5777, // Replace with the correct chain ID of Ganache network
    },
    
  },
  solidity: "0.8.18",
};
