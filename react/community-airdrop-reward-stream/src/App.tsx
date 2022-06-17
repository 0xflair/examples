import { VestedHolderStreamClaimingSection } from "flair-sdk";

const STREAM_CHAIN_ID = "137";
const STREAM_CONTRACT_ADDRESS = "0x297b26231c5e06d807a6a33835618c5bc6e8fffb";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Import the whole prebuilt section component */}
      <VestedHolderStreamClaimingSection
        chainId={Number(STREAM_CHAIN_ID)}
        contractAddress={STREAM_CONTRACT_ADDRESS}
      />

      {/* OR, if you want control over each component (supply counter, mint button, etc) */}
      {/* you can copy the source code from https://github.com/0xflair/typescript-sdk/blob/main/packages/react-token-streams/src/presets/vested-holder-preset/sections/VestedHolderStreamClaimingSection.tsx#L28-L102 */}
    </div>
  );
}

export default App;
