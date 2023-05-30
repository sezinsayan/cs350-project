const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const Contract = await hre.ethers.getContractFactory("Trial");
  const contract = await Contract.deploy();
  await contract.deployed();

  console.log("Contract deployed:", contract.address);

  // Set the recipient address
  const recipientAddress = "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955";
  await contract.setRecipient(recipientAddress);

  console.log("Recipient address:", recipientAddress);

  // Transfer the desired amount
  const amount = ethers.utils.parseEther("1.0");
  await contract.transfer(amount);

  console.log("Transfer complete.");
}

main()
  .then((contractAddress) => {
    console.log("Contract address passed to test script:", contractAddress);
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
