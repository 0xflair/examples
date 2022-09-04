import {
  ConnectButton,
  StreamClaimableAmount,
  StreamClaimButton,
  StreamClaimingProvider,
  StreamRateByTokens,
  StreamEmissionTimeUnit,
  StreamTotalClaimed,
  SwitchChainButton,
  WalletDropdown,
  StreamClaimingStatusBar,
  RequireConnect,
  StreamProvider,
} from "flair-sdk";

const STREAM_CHAIN_ID = "43114";
const STREAM_CONTRACT_ADDRESS = "0x6b32a8d6be237a43b3e30fd52a13835725343c9a";

function App() {
  const chainId = Number(STREAM_CHAIN_ID);
  const contractAddress = STREAM_CONTRACT_ADDRESS;

  const buttonClass =
    "mt-4 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <StreamProvider
      contractAddress={contractAddress}
      chainId={Number(chainId)}
    >
      {({ data: { stream } }) => (
        <>
          <style type="text/css">{`html,body {background: none transparent !important;}`}</style>
          <div className="flex flex-col items-center p-8">
            <h1 className="flex items-center justify-between text-4xl font-medium text-gray-900">
              {stream?.publicTitle || stream?.contractAddress?.substring(0, 8)}
            </h1>

            <div className="mt-4">
              <RequireConnect notConnectedView={<></>}>
                <WalletDropdown />
              </RequireConnect>
            </div>

            <StreamClaimingProvider>
              <main className="flex items-center">
                <div className="min-w-full">
                  <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                    <div className="lg:col-span-12">
                      <section className="flex flex-col gap-2 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
                        <dl className={'space-y-4'}>
                          <div className="flex items-center justify-between gap-4">
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
                          <div className="border-t border-gray-200 pt-4 flex items-center justify-between gap-4">
                            <dt className="flex flex-col gap-1 text-sm text-gray-600">
                              <span>Reward rate</span>
                              <small className="text-xs flex-shrink-0 text-gray-400">
                                How many tokens you receive{' '}
                                <StreamEmissionTimeUnit className="inline" />
                              </small>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">
                              <StreamRateByTokens />
                            </dd>
                          </div>
                          <div className="border-t border-gray-200 pt-4 flex items-center justify-between gap-4">
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
                          <div className="border-t border-gray-200 pt-4 flex items-center justify-between gap-4">
                            <dt className="text-base font-medium text-gray-900">
                              Claimable now for you
                            </dt>
                            <dd className="text-base font-medium text-gray-900">
                              <StreamClaimableAmount />
                            </dd>
                          </div>
                        </dl>

                        <div className="flex flex-col justify-center items-center">
                          {/* Claim button */}
                          <ConnectButton
                            wrapperClassName="w-full"
                            className={buttonClass}
                            label="Connect to claim"
                          >
                            <SwitchChainButton
                              requiredChainId={Number(chainId)}
                              className={buttonClass}
                            >
                              <StreamClaimButton className={buttonClass} />
                            </SwitchChainButton>
                          </ConnectButton>
                        </div>

                        <StreamClaimingStatusBar />
                      </section>
                    </div>
                  </div>
                </div>
              </main>
            </StreamClaimingProvider>
          </div>
        </>
      )}
    </StreamProvider>
  );
}

export default App;
