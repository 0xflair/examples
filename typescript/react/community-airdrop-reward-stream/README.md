# Example: `community-airdrop-reward-stream`

This example React app uses Flair token streams to render a claiming widget for holders of your NFT collection to claim some ERC20 rewards over a specific period of time.

### Dependencies

* `react`: v17.x

## Quick Start

In the project directory, you can run:

1. Create a new stream in [Flair's dashboard](https://app.flair.finance/streams). Note that you will be the full owner of staking contract.
2. Grab your contract address and chain ID, and update [App.tsx](./src/App.tsx):
   * Set `STREAM_CONTRACT_ADDRESS` to your deployed contract address you get from Flair's dashboard > Staking > your stream > Deploy tab.
   * Set `STREAM_CHAIN_ID` depending on the contract chain. Use `1` for Eth mainnet, `4` for Rinkeby testnet, `137` for Polygon mainnet.
3. Run the react app in the `community-airdrop-reward-stream` directory:

   ```sh
   npm start
   ```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn

To use this example within your app:

1. Install `flair-sdk` in your React app:

   ```sh
   npm install flair-sdk
   ```

2. Configure FlairProvider:

   ```ts

   ```