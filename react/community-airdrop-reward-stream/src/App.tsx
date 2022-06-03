import {
  RequireChain,
  RequireConnect,
  VestedHolderStreamClaimingSection,
} from "flair-sdk";

const STREAM_CHAIN_ID = "137";
const STREAM_CONTRACT_ADDRESS = "0x297b26231c5e06d807a6a33835618c5bc6e8fffb";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <RequireConnect>
        <RequireChain requiredChainId={Number(STREAM_CHAIN_ID)}>
          <VestedHolderStreamClaimingSection
            chainId={Number(STREAM_CHAIN_ID)}
            contractAddress={STREAM_CONTRACT_ADDRESS}
          />
        </RequireChain>
      </RequireConnect>
    </div>
  );
}

export default App;
