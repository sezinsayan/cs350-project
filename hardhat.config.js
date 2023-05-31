/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    ganache: {
      url: "http://localhost:7545", // Replace with the correct Ganache URL
      chainId: 5777, // Replace with the correct chain ID of Ganache network
    },
    
  },
  solidity: "0.8.18",
};
