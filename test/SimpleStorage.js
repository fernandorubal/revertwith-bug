const { expect } = require("chai");

describe("SimpleStorage Contract", function () {
    const INITIAL_VALUE = 1;
    const ZERO_NOT_ALLOWED = '72';
    let simpleStorage;
  
    before(async function () {
      const deployer = (await ethers.getSigners())[0];
      simpleStorageFactory = await ethers.getContractFactory("SimpleStorage"); 
      simpleStorage = await (
        await simpleStorageFactory.connect(deployer).deploy(INITIAL_VALUE)
      ).deployed();
    });

    it("Should read the initial value", async function () {
      const value = await simpleStorage.get();
      expect(value).to.be.equal(INITIAL_VALUE);
    });

    it("Should save a new value 2", async function () {
      const tx = await (await simpleStorage.set(2)).wait();
      const value = await simpleStorage.get();
      expect(value).to.be.equal(2);
    });

    it("Should revert with code 72 when trying to save a zero", async function () {
      await expect(simpleStorage.set(0)).to.be.revertedWith(ZERO_NOT_ALLOWED);
    });

    it("Should save a new value 3", async function () {
        const tx = await(await simpleStorage.set(3)).wait();
        const value = await simpleStorage.get();
        expect(value).to.be.equal(3);
    });
});
