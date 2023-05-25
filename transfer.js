const hre = require("hardhat");

async function main() {
  const Trial = await hre.ethers.getContractFactory("Trial");
  const trial = await Trial.deploy();

  await trial.deployed();

  console.log("Contract deployed:", trial.address);

  // Set the recipient address
  await trial.setRecipient("<recipient-address>");

  // Transfer the desired amount
  await trial.transfer("<amount>");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
