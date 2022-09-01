# Example: Simple webhook for Meta Transactions

This example uses Flair Webhooks to listen to results of a [meta transaction](../mint-nft-by-role-meta-transactions/) which is helpful to capture final transaction hash and nonce where your meta transactions are included.

##### Dependencies

* Node.js
* Express
* A backend that sends meta transactions like [this example](../mint-nft-by-role-meta-transactions/)

## :fire: Quick Start

1. Create a test collection and run an example server which sends meta transactions, like [this example](../mint-nft-by-role-meta-transactions/).

2. Clone this repo and navigate to the example directory:

    ```bash
    git clone https://github.com/0xflair/examples

    cd examples/nodejs/express/simple-meta-transactions-webhook

    npm install
    ```

3. Copy `.env.dist` and create a new `.env` file:

    ```bash
    cp .env.dist .env
    ```

4. Put the correct values in `.env` file:
   * *FLAIR_CLIENT_ID*: copy from step 1 above where you created your [Flair API Client](https://app.flair.finance/clients).

5. Start the test server:

    ```bash
    npm start
    ```

6. Use [ngrok](https://ngrok.com/) to expose the test server publicly:

    ```bash
    ngrok http 8090
    ```

7. Create a webhook in your Flair Client page, and set the URL based on ngrok domain:

    ```bash
    # for example:
    https://0da8-24-57-101-201.ngrok.io/meta-transactions/webhook
    ```

## Need help?

Our developers are happy to help you debug issues and problems, join our [Discord](https://discord.gg/flair) and drop a message.
