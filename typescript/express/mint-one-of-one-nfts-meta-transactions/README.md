# Example: Mint 1-of-1 NFTs from your backend (Typescript)

This example uses Flair SDK to mint new NFTs from your backend using meta transactions. In this approach you will configure a private key that has the "minter" role on your NFT collection (or is contract owner -- which is less secure).

We're going to use "Digital Asset Collection" collection, which is using [OneOfOneExtension](https://docs.flair.finance/sdk/nft-collections/minting/of-1-mint), and will mint NFTs with dedicated dynamic metadata and image URI. This means each NFT will have it's own metadata and image IPFS URI.

##### Dependencies

* Node.js
* Typescript
* Express
* `flair-sdk`: latest
* An Ethereum-compatible wallet private key (either [via Javascript](https://www.quicknode.com/guides/web3-sdks/how-to-generate-a-new-ethereum-address-in-javascript) using [MetaMask](https://metamask.io/))

## :fire: Quick Start

1. Create and deploy a **Digital Asset Collection** under 2 minutes via [Flair's Collections](https://app.flair.finance/collections/create/ERC721OneOfOne).

2. Create your first API Key if not already done via [Flair's API Keys](https://app.flair.finance/clients).

3. Clone this repo and navigate to the example directory:

    ```bash
    git clone https://github.com/0xflair/examples

    cd examples/nodejs/express/mint-one-of-one-nft-meta-transactions

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

6. If you're using a minter wallet other than your contract owner, give that minter address "MINTER_ROLE", so it can mint NFTs:
    1. Go to your collection dashboard
    2. Go to "Roles" admin section
    3. Paste your minter address, and click on "Grant role".

7. Allow Flair's trusted forwarder to send meta-transactions to your collection:
    1. Go to your collection dashboard
    2. Go to "Minting" admin section, scroll down to "Backend minting" card.
    3. Configure your trusted forwarder address with the value of Flair's latest trusted forwarder shown at the bottom of the same card.

8. Build the project to get javascript files based on typescript code:

    ```bash
    npm run build
    ```

9. Start the test server:

    ```bash
    npm start
    ```

10. Open the test endpoint in your browser to mint the first NFT:

    * [http://localhost:8080/mint](http://localhost:8080/mint)

## Need help?

Our developers are happy to help you debug issues and problems, join our [Discord](https://discord.gg/flair) and drop a message.
