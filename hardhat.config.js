/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    ganache: {
      url: "http://localhost:7545", // Replace with the correct Ganache URL
      chainId: 5777, // Replace with the correct chain ID of Ganache network
    },
  },
  solidity: "0.8.18",
};
