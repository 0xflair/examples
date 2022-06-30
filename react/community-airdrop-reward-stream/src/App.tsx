import {
  Environment,
  ConnectButton,
  StreamClaimableAmount,
  StreamClaimButton,
  StreamClaimingProvider,
  StreamEligibleNfts,
  StreamEmissionRate,
  StreamEmissionTimeUnit,
  StreamStatusBar,
  StreamTotalClaimed,
  SwitchChainButton,
  WalletDropdown,
} from "flair-sdk";

const STREAM_CHAIN_ID = "137";
const STREAM_CONTRACT_ADDRESS = "0x08a48926cac3c8de4285f3ce00538075adc633e4";

function App() {
  const chainId = Number(STREAM_CHAIN_ID);
  const contractAddress = STREAM_CONTRACT_ADDRESS;

  const buttonClass =
    "mt-4 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <StreamClaimingProvider chainId={chainId} contractAddress={contractAddress}>
      {({ data: { stream } }) => (
        <>
          <main className="mx-auto max-w-lg flex items-center p-4">
            <div className="min-w-full">
              <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                <div className="lg:col-span-12">
                  <h1 className="text-2xl font-medium text-gray-900">
                    {stream?.publicTitle ||
                      stream?.contractAddress?.substring(0, 8)}
                  </h1>

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
                          <dt className="flex flex-col gap-1 text-sm text-gray-600">
                            <span>Your total claimed</span>
                            <small className="text-xs flex-shrink-0 text-gray-400">
                              Sum of all previous claims
                            </small>
                          </dt>
                          <dd className="text-sm font-medium text-gray-900">
                            <StreamTotalClaimed />
                          </dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                          <dt className="flex flex-col gap-1 text-sm text-gray-600">
                            <span>Emission rate</span>
                            <small className="text-xs flex-shrink-0 text-gray-400">
                              Amount of tokens released for all holders{" "}
                            </small>
                          </dt>
                          <dd className="text-sm font-medium text-gray-900">
                            <StreamEmissionRate />
                          </dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                          <dt className="flex flex-col gap-1 text-sm text-gray-600">
                            <span>Claim window</span>
                            <small className="text-xs flex-shrink-0 text-gray-400">
                              How often can you claim
                            </small>
                          </dt>
                          <dd className="text-sm font-medium text-gray-900">
                            <StreamEmissionTimeUnit />
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
                            requiredChainId={Number(chainId)}
                            className={buttonClass}
                          >
                            <StreamClaimButton className={buttonClass} />
                          </SwitchChainButton>
                          <div className="mt-4">
                            <WalletDropdown />
                          </div>
                        </ConnectButton>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="mt-4 lg:col-span-12">
                  <StreamStatusBar />

                  {stream?.publicDescription ? (
                    <div className="mt-4">
                      <h2 className="mt-4 text-sm font-medium text-gray-900">
                        Description
                      </h2>

                      <div className="mt-3 prose prose-sm text-gray-500">
                        {stream?.publicDescription}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </StreamClaimingProvider>
  );
}

export default App;
