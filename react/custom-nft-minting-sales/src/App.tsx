import { CollectionSalesMintingSection } from "flair-sdk";

const COLLECTION_CHAIN_ID = "137";
const COLLECTION_CONTRACT_ADDRESS =
  "0x564b577b62133b53ad2774711e40e53a6362b553";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Import the whole prebuilt section component */}
      <CollectionSalesMintingSection
        chainId={Number(COLLECTION_CHAIN_ID)}
        contractAddress={COLLECTION_CONTRACT_ADDRESS}
      />

      {/* OR, if you want control over each component (supply counter, mint button, etc) */}
      {/* you can copy the source code from https://github.com/0xflair/typescript-sdk/blob/main/packages/react-nft-collections/src/extensions/sales/sections/CollectionSalesMintingSection.tsx#L30-L154 */}
    </div>
  );
}

export default App;
