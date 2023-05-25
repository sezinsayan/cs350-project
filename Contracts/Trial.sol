pragma solidity ^0.8.4;

contract Trial{
    address public admin;
    address public recipient;

    constructor(address _recipient) {
        admin = msg.sender;
        recipient = _recipient;
    }
}