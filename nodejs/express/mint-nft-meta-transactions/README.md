# Example: Mint NFTs from your backend

This example uses Flair SDK to mint new NFTs from your backend using meta transactions. In this approach you will configure a private key that has the "minter" role on your NFT collection (or is contract owner -- which is less secure).

##### Dependencies

* Node.js
* Express
* `flair-sdk`: latest
* An Ethereum-compatible wallet private key (either [via Javascript](https://www.quicknode.com/guides/web3-sdks/how-to-generate-a-new-ethereum-address-in-javascript) using [MetaMask](https://metamask.io/))

## :fire: Quick Start

1. Create and deploy a **1-of-1 NFT Collection** under 2 minutes via [Flair's Collections](https://app.flair.finance/collections/create/ERC721OneOfOne).

2. Create your first API Key if not already done via [Flair's API Keys](https://app.flair.finance/clients).

3. Close this repo and navigate to the example directory:

    ```bash
    git clone https://github.com/0xflair/examples

    cd examples/nodejs/express/mint-nft-meta-transactions

    npm install
    ```

4. Copy `.env.dist` and create a new `.env` file:

    ```bash
    cp .env.dist .env
    ```

5. Put the correct values in `.env` file:
   * *FLAIR_CLIENT_ID*: copy from step2 above.
   * *CONTRACT_CHAIN_ID*: based on the chain you used to deploy the contract. `1` for Eth mainnet, `4` for Rinkeby testnet, `137` for Polygon mainnet, etc.
   * *MINTER_PRIVATE_KEY*: the private key of your wallet, or a new wallet you created just for minting.

6. Start the test server:

    ```bash
    npm start
    ```

7. Open the test endpoint in your browser to mint the first NFT:

    * [http://localhost:8080/mint](http://localhost:8080/mint)
