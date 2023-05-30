const hre = require("hardhat");



async function main() {
  const Trial = await hre.ethers.getContractFactory("Trial");
  const trial = await Trial.deploy();
  const recipientAddress = process.env.RECIPIENT_ADDRESS; // give address of wallet
  const amount=1; // the amount to be transfered

  await trial.deployed();

  console.log("Contract deployed:", trial.address);

  // Set the recipient address
  await trial.setRecipient(recipientAddress);

  // Transfer the desired amount
  await trial.transfer(amount);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
