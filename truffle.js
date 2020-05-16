var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "lake panther nest knee benefit push stamp deliver vacuum train magic please";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 50);
      },
      network_id: '*',
      gas: 8000000,
      gasPrice: 1
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};