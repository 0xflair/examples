# Mint NFTs from your backend

This example uses Flair SDK to mint new NFTs from your backend using meta transactions. In this approach you will configure a private key that has the "minter" role on your NFT collection (or is contract owner -- which is less secure).

**Requires:**
* Node.js
* Express
* An Ethereum-compatible wallet private key (either [via Javascript](https://www.quicknode.com/guides/web3-sdks/how-to-generate-a-new-ethereum-address-in-javascript) using [MetaMask](https://metamask.io/))
* Flair Client ID (get yours in [Flair's dApp](https://app.flair.finance/clients))
* A deployed NFT Collection (create a test collection in 2 minutes via [Flair's Collections](https://app.flair.finance/collections))

## Installation

1. Close this repo and navigate to the example directory:

    ```bash
    git clone https://github.com/0xflair/examples

    cd examples/nodejs/express/mint-nft-meta-transactions

    npm install
    ```

2. Copy `.env.dist` and create a new `.env` file:

    ```bash
    cp .env.dist .env
    ```

3. Put the correct values in `.env` file.

4. Start the test server:

    ```bash
    npm start
    ```

5. Open the test endpoint in your browser to mint the first NFT:

    * [http://localhost:8080/mint](http://localhost:8080/mint)
