import { Channel, Connection, connect } from "amqplib";
import { Hono } from "hono";

const app = new Hono();

(async () => {
  const queue = "mpesa";
  const connection: Connection = await connect("amqp://localhost");

  const mpesaChannel: Channel = await connection.createChannel();
  await mpesaChannel.assertQueue(queue);

  // Listener
  mpesaChannel.consume(queue, (msg) => {
    if (msg !== null) {
      console.log("Recieved:", msg.content.toString());
      mpesaChannel.ack(msg);
    } else {
      console.log("Consumer cancelled by server");
    }
  });
})();

app.get("*", (c) =>
  c.json({
    apiVersion: "1.0.0",
    apiDescription: "Mpesa Service",
  })
);

export default app;
