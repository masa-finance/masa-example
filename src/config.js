const { ethers } = require("ethers");
const { Masa } = require("@masa-finance/masa-sdk");
const { version: sdkVersion } = require("@masa-finance/masa-sdk/package.json");

console.log(`Using SDK: ${sdkVersion}`);

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/eth_goerli"
);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const masa = new Masa({
  wallet,
  apiUrl: "https://test.middleware.masa.finance/",
  environment: "test",
  defaultNetwork: "goerli",
});

console.log(masa.config.network);

module.exports = {
  masa,
};
