const hre = require("hardhat");

async function main() {
    const MoneyTransfer = await hre.ethers.getContractFactory("MoneyTransfer");
    const moneyTransfer = await MoneyTransfer.deploy("<recipient-address>");

    await moneyTransfer.deployed();

    console.log("Contract deployed:", moneyTransfer.address);
    await moneyTransfer.transfer("<amount>");
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });