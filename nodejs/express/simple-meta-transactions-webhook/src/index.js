require("dotenv").config();

const express = require("express");
const asyncHandler = require("express-async-handler");

const app = express();

app.use(express.json());

app.post(
  "/meta-transactions/webhook",
  asyncHandler(async (req, res) => {
    if (req.header('X-Webhook-Secret') !== process.env.WEBHOOK_SECRET) {
      res.status(401).send(`Wrong webhook secret: ${req.header('X-Webhook-Secret')}`);
      return;
    }

    console.log('# Webhook received: ');
    console.log('\t- Transaction ID: ' + req.body.payload.id);
    console.log('\t- Transaction hash: ' + req.body.payload.txHash);
    console.log('\t- Transaction nonce: ' + req.body.payload.txNonce);
    console.log('\t- Transaction chainId: ' + req.body.payload.chainId);
    console.log('\t- Transaction forwarder: ' + req.body.payload.forwarder);
    console.log('\t- Transaction signature: ' + req.body.payload.signature);
    console.log('\t- Meta transaction from: ' + req.body.payload.from);
    console.log('\t- Meta transaction to: ' + req.body.payload.to);
    console.log('\t- Meta transaction value: ' + req.body.payload.value);
    console.log('\t- Meta transaction nonce: ' + req.body.payload.nonce);

    res.send({
      webhookCategory: req.body.category,
      webhookEvent: req.body.event,
      webhookPayload: req.body.payload
    });
  })
);

const port = 8090;

app.listen(port, () => {
  console.log(`Flair SDK Example - Simple Meta Transactions Webhook!`);
  console.log(`- Listening on port ${port}`);
  console.log(``);
  console.log(`Now you will receive webhooks on: http://localhost:${port}/meta-transactions/webhook`);
});
