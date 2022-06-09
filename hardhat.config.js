require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-waffle')
require('hardhat-gas-reporter')

const TESTNET_GAS_MULT = 5
const GWEI = 1000 * 1000 * 1000
const minimumGasPriceTestnet = 0.06 * GWEI
const MNEMONIC = ''
const MNEMONIC_PATH = ''

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    ganache: {
      chainId: 1337,
      url: 'http://localhost:8545',
      gasPrice: 0.875 * GWEI,
      gasMultiplier: TESTNET_GAS_MULT
    },
    rsktestnet: {
      chainId: 31,
      url: 'https://rsk.qubistry.co/',
      gasPrice: Math.floor(minimumGasPriceTestnet * TESTNET_GAS_MULT),
      gasMultiplier: TESTNET_GAS_MULT,
      accounts: {
        mnemonic: MNEMONIC,
        initialIndex: 0,
        path: MNEMONIC_PATH,
        count: 10
      }
    },
    regtest: {
      chainId: 33,
      url: 'http://localhost:4444',
      gasPrice: 0,
      gasMultiplier: TESTNET_GAS_MULT
    }
  }
}
