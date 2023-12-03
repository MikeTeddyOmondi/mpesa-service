const IntaSend = require("intasend-node");

let intasend = new IntaSend(
  "<INTASEND_PUBLISHABLE_KEY>",
  "<INTASEND_SECRET_KEY>",
  true // set to false when going live
);

let collection = intasend.collection();

// How to trigger STK Push
collection
  .mpesaStkPush({
    phone_number: '25472xxxxxxx',
    name: 'John Doe',
    email: 'test@intasend.com',
    amount: 10,
    api_ref: 'test',
  })
  .then((resp: any) => {
    console.log(`Resp: ${JSON.stringify(resp)}`);
  })
  .catch((err: any) => {
    console.error(`error: ${err}`);
  });