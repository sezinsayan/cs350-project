// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Trial{
    address public admin;
    address public recipient;

    constructor() {
        admin = msg.sender;
    }

    function setRecipient(address _recipient) public {
        require(msg.sender == admin, "Only the admin can set the recipient");
        recipient = _recipient;
    }

    function transfer(uint256 amount) payable external {
        require(msg.sender == admin, "Only the admin can make transfers");
        require(address(this).balance >= amount, "Not enough balance in account");

        payable(recipient).transfer(amount);
    }

    receive() external payable {}

}