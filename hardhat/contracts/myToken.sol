// SPDX-License-Identifier:UNLINCENSED

pragma solidity >= 0.7.0 < 0.9.0;
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "./myERC20.sol";

contract ORC is ERC20{
  // mapping(address => bool) controllers;
  // mapping(address => uint) private _balances;
  // uint256 public constant maxSupply=2000000*10**18;
  // uint256 maxInCirculation;
  // uint private _totalSupply;

  constructor() ERC20("Onwudiwe Rita Chinwendu","ORC"){
    _mint(_msgSender(), 2000000 * (10 ** 18));
  }



  // function mint(address account, uint256 amount) external {
  //   require(controllers[msg.sender], "Not the controller");
  //   require((maxInCirculation + amount) <= maxSupply, "Maximum supply reached");
  //   maxInCirculation += amount;
  //   _totalSupply += amount;
  //   _balances[account] += amount;
  //   _afterTokenTransfer(address(0), account, amount);
  // }

}