import { CollectionSalesMintingSection } from "flair-sdk";
const { REACT_APP_COLLECTION_CHAIN_ID, REACT_APP_COLLECTION_CONTRACT_ADDRESS } = process.env

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Import the whole prebuilt section component */}
      <CollectionSalesMintingSection
        chainId={Number(REACT_APP_COLLECTION_CHAIN_ID)}
        contractAddress={String(REACT_APP_COLLECTION_CONTRACT_ADDRESS)}
      />

      {/* OR, if you want control over each component (supply counter, mint button, etc) */}
      {/* you can copy the source code from https://github.com/0xflair/typescript-sdk/blob/main/packages/react-nft-collections/src/extensions/sales/sections/CollectionSalesMintingSection.tsx#L30-L154 */}
    </div>
  );
}

export default App;
