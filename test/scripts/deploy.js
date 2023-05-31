const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const Contract = await hre.ethers.getContractFactory("Trial");
  const contract = await Contract.deploy();
  await contract.deployed();

  // Fund the contract with Ether
  const fundingAmount = ethers.utils.parseEther("10.0");
  const sender = ethers.provider.getSigner(deployer.address);
  await sender.sendTransaction({
    to: contract.address,
    value: fundingAmount,
  });

  // Set the recipient address
  const recipientAddress = "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955";
  await contract.setRecipient(recipientAddress);

  // Transfer the desired amount with the admin as the sender
  const transferAmount = ethers.utils.parseEther("1.0");
  await contract.connect(sender).transfer(transferAmount);

  console.log("Transfer complete.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
