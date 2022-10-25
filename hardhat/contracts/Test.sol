// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract myTest {
  string public name;
  constructor() {
    name = "Onwudiwe Rita";
  }

  function updateName(string memory _name) external{
    name = _name;
  }
}