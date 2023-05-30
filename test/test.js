const Trial = artifacts.require("Trial");

contract("Trial", (accounts) => {
  let trial;
  const admin = accounts[0];
  const recipient = accounts[1];
  const amount = web3.utils.toWei("1", "ether");

  beforeEach(async () => {
    trial = await Trial.new({ from: admin });
  });

  it("should set the recipient correctly", async () => {
    await trial.setRecipient(recipient, { from: admin });
    const result = await trial.recipient();
    assert.equal(result, recipient, "Recipient address should be set correctly");
  });

  it("should transfer funds successfully", async () => {
    await trial.setRecipient(recipient, { from: admin });
    await trial.transfer(amount, { from: admin, value: amount });
    const contractBalance = await web3.eth.getBalance(trial.address);
    assert.equal(contractBalance, amount, "Contract balance should be updated");
  });
});
