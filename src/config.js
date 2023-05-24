const { ethers } = require("ethers");
const { Masa } = require("@masa-finance/masa-sdk");
const { version: sdkVersion } = require("@masa-finance/masa-sdk/package.json");

console.log(`Using SDK: ${sdkVersion}`);

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/eth_goerli"
);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const masa = new Masa({
  signer: wallet,
  apiUrl: "https://beta.middleware.masa.finance",
  environment: "stage",
  defaultNetwork: "goerli",
});

console.log(masa.config.network);

module.exports = {
  masa,
};
