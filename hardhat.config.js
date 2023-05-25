/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    ganache: {
      url: "http://localhost:8545", // Replace with the correct Ganache URL
      chainId: 1337, // Replace with the correct chain ID of Ganache network
    },
  },
  solidity: "0.8.18",
};
