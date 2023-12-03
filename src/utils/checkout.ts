import { config } from "dotenv";
import { QueueMsg } from "../types";
const IntaSend = require("intasend-node");

config();

const { INTASEND_API_TOKEN, INTASEND_PUBLISHABLE_KEY } = process.env;

let intasend = new IntaSend(
  INTASEND_PUBLISHABLE_KEY,
  INTASEND_API_TOKEN,
  true // set to false when going live
);

let collection = intasend.collection();
console.log(collection);

//Trigger STK Push
async function checkout(data: any) {
  // const { phone_number } = data;
  // console.log({ phone_number });
  console.log({ data });

  collection
    .mpesaStkPush({
      name: data.name,
      email: data.email,
      amount: data.amount,
      api_ref: data.api_ref,
      phone_number: data.phone_number,
    })
    .then((resp: any) => {
      console.log(`Resp: ${JSON.stringify(resp)}`);
    })
    .catch((err: any) => {
      console.error(`error: ${err}`);
    });
}

export default checkout;
