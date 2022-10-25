// const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
// const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
// const { expect } = require("chai");

// describe("Test", function () {
//   async function deployTextFixture() {
//     const Test = await ethers.getContractFactory("myTest");
//     const test = await Test.deploy();

//     return { test };
//   }

//   describe("Name", function () {
//     it("Should return Onwudiwe Rita as name", async function () {
//       const { test } = await loadFixture(deployTextFixture);
//       await expect(await test.name()).to.be.equal("Onwudiwe Rita");
//     });

//     it("Should set name", async function () {
//       const { test } = await loadFixture(deployTextFixture);
//       await expect(await test.name()).to.be.equal("Onwudiwe Rita");

//       // change of name
//       await test.updateName("Lucy");
//       // We use test.updateName() to change the name
//       await expect(await test.name()).to.be.equal("Lucy");

//       const name = await test.name();
//       console.log(name);
//     });
//   });
// });

// const { expect } = require("chai");
// const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

// // `describe` is a Mocha function that allows you to organize your tests.
// // `describe` receives the name of a section of your test suite, and a
// // callback. The callback must define the tests of that section. This callback
// // can't be an async function.
// describe("Token contract", function () {
//   async function deployTokenFixture() {
//     const Token = await ethers.getContractFactory("ORC");
//     const [owner, addr1, addr2] = await ethers.getSigners();

//     // To deploy our contract, we just have to call Token.deploy() and await
//     // its deployed() method, which happens onces its transaction has been
//     // mined.
//     const ORCToken = await Token.deploy();
//     await ORCToken.deployed();
//     return { ORCToken };
//   }

//   // You can nest describe calls to create subsections.
//   describe("Deployment", function () {
//     it("Should set the right owner", async function () {
//       const { ORCToken, owner } = await loadFixture(deployTokenFixture);

//       // `expect` receives a value and wraps it in an assertion object.
//       // This test expects the owner variable stored in the contract to be
//       // equal to our Signer's owner.
//       expect(await ORCToken.owner()).to.equal(owner.address);
//     });

//     it("Should assign the total supply of tokens to the owner", async function () {
//       const { ORCToken, owner } = await loadFixture(deployTokenFixture);
//       const ownerBalance = await ORCToken.balanceOf(owner.address);
//       expect(await ORCToken.totalSupply()).to.equal(ownerBalance);
//     });
//   });

//   describe("Transactions", function () {
//     it("Should transfer tokens between accounts", async function () {
//       const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
//         deployTokenFixture
//       );
//       // // Transfer 50 tokens from owner to addr1
//       // await expect(
//       //   hardhatToken.transfer(addr1.address, 50)
//       // ).to.changeTokenBalances(hardhatToken, [owner, addr1], [-50, 50]);

//       // // Transfer 50 tokens from addr1 to addr2
//       // // We use .connect(signer) to send a transaction from another account
//       // await expect(
//       //   hardhatToken.connect(addr1).transfer(addr2.address, 50)
//       // ).to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50]);
//     });

//     it("should let you Transfer to another account", async function () {
//       // const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
//       //   deployTokenFixture
//       // );

//       await ORCToken.transfer(addr1.address, ethers.utiliis.parseEther("100"));

//       expect(await ORCToken.balanceOf(addr1.address)).to.equal(
//         ethers.utiliis.parseEther("100")
//       );
//     });

//     it("Should fail if sender doesn't have enough tokens", async function () {
//       const { ORCToken, owner, addr1 } = await loadFixture(deployTokenFixture);
//       const initialOwnerBalance = await ORCToken.balanceOf(owner.address);

//       // Try to send 1 token from addr1 (0 tokens) to owner (1000 tokens).
//       // `require` will evaluate false and revert the transaction.
//       await expect(
//         ORCToken.connect().transfer(owner.address, _amount)
//       ).to.be.revertedWith("Not enough tokens");

//       // Owner balance shouldn't have changed.
//       expect(await hardhatToken.balanceOf(owner.address)).to.equal(
//         initialOwnerBalance
//       );
//     });
//   });
// });
