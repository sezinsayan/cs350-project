const { expect } = require("chai");

describe("Trial Contract", function () {
  let admin;
  let recipient;
  let contract;

  before(async function () {
    const [deployer, recipientAddr] = await ethers.getSigners();
    admin = deployer;
    recipient = recipientAddr;

    // Deploy the contract
    const Contract = await ethers.getContractFactory("Trial");
    contract = await Contract.deploy();
    await contract.deployed();

    // Fund the contract with Ether
    const fundingAmount = ethers.utils.parseEther("10.0");
    await admin.sendTransaction({
      to: contract.address,
      value: fundingAmount,
    });
  });

  describe("Correct address", function () {
    it("should set the recipient address", async function () {
      const recipientAddress = "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955";

      await contract.connect(admin).setRecipient(recipientAddress);
      expect(await contract.recipient()).to.equal(recipientAddress);
    });

    it("should transfer funds to the recipient", async function () {
      const recipientAddress = "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955";
      const amount = ethers.utils.parseEther("1.0");
      const ar=10000;
    
      const initialBalance = await recipient.getBalance();
      await contract.connect(admin).transfer(amount);
    
      const newBalance = await recipient.getBalance()/ar;
      expect(newBalance.toString()).to.equal(amount.toString());
    });
    
  });
});
