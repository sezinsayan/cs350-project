const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const Contract = await hre.ethers.getContractFactory("Trial");
  const contract = await Contract.deploy();
  await contract.deployed();

  console.log("Contract deployed:", contract.address);

  // Fund the contract with Ether
  const fundingAmount = ethers.utils.parseEther("10.0"); // Adjust the funding amount if needed
  const sender = ethers.provider.getSigner(deployer.address);
  await sender.sendTransaction({
    to: contract.address,
    value: fundingAmount,
  });

  console.log("Contract funded with Ether:", fundingAmount.toString());

  // Set the recipient address
  const recipientAddress = "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955";
  await contract.setRecipient(recipientAddress);

  console.log("Recipient address:", recipientAddress);

  // Transfer the desired amount
  const transferAmount = ethers.utils.parseEther("1.0");
  await contract.transfer(transferAmount);

  console.log("Transfer complete.");
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
