import {
  ConnectButton,
  DisconnectButton,
  StreamClaimableAmount,
  StreamClaimButton,
  StreamClaimingProvider,
  StreamEligibleNfts,
  StreamStatusBar,
  StreamTotalClaimed,
  SwitchChainButton,
  VestedHolderStreamClaimingProvider,
  VestedHolderStreamRate,
  VestedHolderStreamReleasedAmount,
  VestedHolderStreamTimeUnit,
} from "flair-sdk";

const STREAM_CHAIN_ID = "137";
const STREAM_CONTRACT_ADDRESS = "0x297b26231c5e06d807a6a33835618c5bc6e8fffb";

function App() {
  const buttonClass =
    "mt-4 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="flex items-center justify-center min-h-screen">
      <StreamClaimingProvider
        chainId={Number(STREAM_CHAIN_ID)}
        contractAddress={STREAM_CONTRACT_ADDRESS}
      >
        <VestedHolderStreamClaimingProvider>
          {({ data: { stream } }) => (
            <>
              <style type="text/css">{`html {background: none transparent !important;}`}</style>
              <main className="h-fit mx-auto max-w-lg flex items-center p-4">
                <div className="min-w-full">
                  <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                    <div className="lg:col-span-12">
                      <div className="flex gap-4 sm:items-center sm:justify-between sm:flex-row flex-col">
                        <div className="flex flex-col gap-2">
                          <h1 className="text-2xl font-medium text-gray-900">
                            {stream?.publicTitle}
                          </h1>
                        </div>
                        <div>
                          <div className="text-md font-medium text-gray-900">
                            <VestedHolderStreamRate />
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <section className="mt-6 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
                          <dl className={"space-y-4"}>
                            <div className="flex items-center justify-between">
                              <dt className="flex items-center text-sm text-gray-600">
                                <span>Your NFTs</span>
                              </dt>
                              <dd className="text-sm font-medium text-gray-900">
                                <StreamEligibleNfts />
                              </dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                              <dt className="flex flex-col text-sm text-gray-600">
                                <span>Your total claimed</span>
                                <small className="flex-shrink-0 text-gray-400">
                                  (all previous claims)
                                </small>
                              </dt>
                              <dd className="text-sm font-medium text-gray-900">
                                <StreamTotalClaimed />
                              </dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                              <dt className="flex flex-col text-sm text-gray-600">
                                <span>Your released amount</span>
                                <small className="flex-shrink-0 text-gray-400 hover:text-gray-500">
                                  (claimable{" "}
                                  <VestedHolderStreamTimeUnit className="inline" />
                                  )
                                </small>
                              </dt>
                              <dd className="text-sm font-medium text-gray-900">
                                <VestedHolderStreamReleasedAmount />
                              </dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                              <dt className="text-base font-medium text-gray-900">
                                Claimable now for you
                              </dt>
                              <dd className="text-base font-medium text-gray-900">
                                <StreamClaimableAmount />
                              </dd>
                            </div>
                          </dl>

                          <div className="mt-6 flex flex-col justify-center items-center">
                            {/* Claim button */}
                            <ConnectButton className={buttonClass}>
                              <SwitchChainButton
                                requiredChainId={Number(STREAM_CHAIN_ID)}
                                className={buttonClass}
                              >
                                <StreamClaimButton className={buttonClass} />
                              </SwitchChainButton>

                              <DisconnectButton className="text-indigo-700 text-sm mt-4" />
                            </ConnectButton>
                          </div>
                        </section>
                      </div>
                    </div>

                    <div className="mt-4 lg:col-span-12">
                      <StreamStatusBar />

                      <div className="mt-4">
                        <h2 className="mt-4 text-sm font-medium text-gray-900">
                          Description
                        </h2>

                        <div className="mt-3 prose prose-sm text-gray-400">
                          Total claimed by all holders:{" "}
                          <StreamTotalClaimed
                            className="inline font-bold"
                            calculationMode="OVERALL"
                          />
                        </div>
                        <div className="mt-3 prose prose-sm text-gray-500">
                          {stream?.publicDescription}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </>
          )}
        </VestedHolderStreamClaimingProvider>
      </StreamClaimingProvider>

      {/* OR, import the whole prebuilt section component:
      
        <VestedHolderStreamClaimingSection
          chainId={Number(STREAM_CHAIN_ID)}
          contractAddress={STREAM_CONTRACT_ADDRESS}
        />
      
      */}
    </div>
  );
}

export default App;
