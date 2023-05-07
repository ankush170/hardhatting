require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "2EbdEBlvbB6HGwe3VOLB9MrwKIyACGrZ";
const GOERLI_PRIVATE_KEY = "8f94172461762a57c62d5309c2336d974f25a969e15211cf44a645deed862cef";

module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/2EbdEBlvbB6HGwe3VOLB9MrwKIyACGrZ',
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};