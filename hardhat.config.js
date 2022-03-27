require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-etherscan');


const dotenv = require("dotenv");

dotenv.config();



module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.REACT_APP_RINKEBY_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY
  }
};