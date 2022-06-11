import {
  RequireChain,
  RequireConnect,
  CollectionSalesMintingSection,
} from "flair-sdk";

const COLLECTION_CHAIN_ID = "137";
const COLLECTION_CONTRACT_ADDRESS = "0x564b577b62133b53ad2774711e40e53a6362b553";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <RequireConnect>
        <RequireChain requiredChainId={Number(COLLECTION_CHAIN_ID)}>
          <CollectionSalesMintingSection
            chainId={Number(COLLECTION_CHAIN_ID)}
            contractAddress={COLLECTION_CONTRACT_ADDRESS}
          />
        </RequireChain>
      </RequireConnect>
    </div>
  );
}

export default App;
