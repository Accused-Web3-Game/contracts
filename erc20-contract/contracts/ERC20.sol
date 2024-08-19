// contracts/ERC20Token.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Note: change name and symbol to the desired values
contract ACSToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("ACCUSED", "ACS") {
        _mint(msg.sender, initialSupply);
    }
}