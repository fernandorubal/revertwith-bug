// File: `./contracts/SimpleStorage.sol`
// SPDX-License-Identifier: agpl-3.0

pragma solidity >=0.6.0;

contract SimpleStorage {
    string public constant ZERO_NOT_ALLOWED = '72';
    uint public storedData;

    constructor(uint initVal) public {
        storedData = initVal;
    }

    function set(uint x) public {
        require(x != 0, ZERO_NOT_ALLOWED);
        storedData = x;
    }

    function get() view public returns (uint retVal) {
        return storedData;
    }
}
