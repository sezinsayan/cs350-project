const hre = require("hardhat");
const { expect } = require("chai");

describe("Trial Contract", function () {
  let admin;
  let recipient;
  let contract;

  before(async function () {
    const [deployer, recipientAddr] = await ethers.getSigners();
    admin = deployer;
    recipient = recipientAddr;

    // Get the contract address from the deployment script
    const contractAddress = admin.address; // Replace with the actual contract address

    const Contract = await ethers.getContractFactory("Trial");
    contract = await Contract.attach(contractAddress);

    console.log("Contract attached:", contract.address);

    // Fund the recipient account with Ether
    const sender = ethers.provider.getSigner(admin.address);
    await sender.sendTransaction({
      to: recipient.address,
      value: ethers.utils.parseEther("10"), // Amount of Ether to send
    });
  });

  it("should set the recipient address", async function () {
    // Access the recipient address from the deployment script
    const recipientAddress = "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955";

    await contract.setRecipient(recipientAddress);
    expect(await contract.recipient()).to.equal(recipientAddress);
  });

  it("should transfer funds to the recipient", async function () {
    // Access the recipient address and amount from the deployment script
    const recipientAddress = "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955";
    const amount = ethers.utils.parseEther("1.0");

    const initialBalance = await recipient.getBalance();
    await contract.transfer(amount);

    const newBalance = await recipient.getBalance();
    expect(newBalance.sub(initialBalance)).to.equal(amount);
  });
});
