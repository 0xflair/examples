# Example: Custom NFT Minting Sales Page using React

This example React app renders a minting pre-sale/public-sale widget for an NFT collection.

##### Dependencies

* `flair-sdk`: latest
* `react`: v17.x or v18.x

## :fire: Quick Start

1. Create a new NFT collection using [Flair's dashboard](https://app.flair.finance/collections). Note that you will be the full owner of smart contract.
2. Clone the examples repo, install dependencies in the `custom-nft-minting-sales` directory:

   ```sh
   git clone https://github.com/0xflair/examples

   cd examples/react/custom-nft-minting-sales

   npm install
   ```

3. Grab your contract address and chain ID, and update [.env](./.env):
   * Set `REACT_APP_COLLECTION_CONTRACT_ADDRESS` to your deployed contract address you get from Flair's dashboard > Collections > your-collection > Deploy tab.
   * Set `REACT_APP_COLLECTION_CHAIN_ID` depending on the contract chain. Use `1` for Eth mainnet, `4` for Rinkeby testnet, `137` for Polygon mainnet, etc.
4. Run the react app in the `custom-nft-minting-sales` directory:

   ```sh
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

![Screenshot](./collection-public-minting.png)

## 🔮 Tutorial

To use this example within your app:

1. Install `flair-sdk` in your React app:

   ```sh
   npm install flair-sdk
   ```

2. Configure FlairProvider around your root App:

   ```ts
   import { FlairProvider } from 'flair-sdk';

   // ...
      <FlairProvider>
         <App />
      </FlairProvider>
   // ...
   ```

3. Implement the minting widget depending on your preferred customizability:
   * Easiest approach with minimum customizability you can copy the code within [App.tsx](./src/App.tsx).
   * To have your own layout you can use individual components as in [CollectionSalesMintingSection.tsx](https://github.com/0xflair/typescript-sdk/blob/main/packages/react-nft-collections/src/extensions/sales/sections/CollectionSalesMintingSection.tsx#L28-L135)

4. *(optional)* To get the default styling you can install and configure [tailwindcss](https://tailwindcss.com/docs/installation/using-postcss):
   1. Install `npm install tailwindcss @headlessui/react @heroicons/react`
   2. Configure [tailwind.config.js](./tailwind.config.js)
   3. Configure [postcss.config.js](./postcss.config.js)
   4. Import tailwind in your [index.css](./src/index.css). Make sure your app imports the CSS `import './index.css';`.

5. *(optional)* If you're using Webpack 5 (e.g. React v17+) you need to manually configure Buffer for Coinbase wallet to work:
   1. Install `npm install react-app-rewired buffer`
   2. Then create a [config-overrides.js](config-overrides.js) to inject the Buffer.

6. Profit :rocket:
