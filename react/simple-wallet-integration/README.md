# Example: Simple Wallet Integration using React

This example React app renders a connect button and when wallet is connected it shows a dropdown menu with wallet's address, balance and disconnect button.

##### Dependencies

- `flair-sdk`: latest
- `react`: v17.x or v18.x

<!-- 
## :fire: Quick Start

1. Clone the examples repo, install dependencies in the `simple-wallet-integration` directory:

   ```sh
   git clone https://github.com/0xflair/examples

   cd examples/react/simple-wallet-integration

   npm install
   ```

2. Run the react app in the `simple-wallet-integration` directory:

   ```sh
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. -->

## 🔮 Tutorial

To use this example within your app:

1. Install `flair-sdk` in your React app:

   ```sh
   npm install flair-sdk
   ```

2. Configure FlairProvider around your root App:

   ```ts
   import { FlairProvider } from "flair-sdk";

   // ...
   <FlairProvider>
     <App />
   </FlairProvider>;
   // ...
   ```

3. _(optional)_ If you're using Webpack 5 (e.g. React v17+) you might to manually configure Buffer for Coinbase wallet to work:

   1. Install `npm install react-app-rewired buffer`
   2. Then create a [config-overrides.js](config-overrides.js) to inject the Buffer.

4. Add `<ConnectButton>`, `<WalletProfile>` and/or `<WalletDropdown>` components in your dApp.

   ```ts
   import { 
      ConnectButton, 
      DisconnectButton, 
      IfConnected, 
      WalletProfile,
      WalletDropdown 
   } from "flair-sdk";

   const App = () => {
     return (
       <div>
         {/* Render a simple connect button */}
         Hi! You can connect here: <ConnectButton />

         {/* If user is connected render a dropdown */}
         <IfConnected>
            <WalletDropdown />
         </IfConnected>

         {/* Render a wallet profile right after connect button */}
         <ConnectButton>
            <WalletProfile />
         </ConnectButton>

         {/* Render a dropdown with wallet profile and menu right after connect button */}
         <ConnectButton>
            <WalletDropdown />
         </ConnectButton>

         {/* Render a disconnect button after user has connected */}
         <ConnectButton>
            <DisconnectButton />
         </ConnectButton>
       </div>
     );
   };
   ```

5. Profit :rocket:
