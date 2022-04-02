const functions = require("firebase-functions");
const line = require("@line/bot-sdk");
require("dotenv").config();

const config = {
  channelAccessToken: functions.config().line.channel_access_token,
  channelSecret: functions.config().line.channel_secret,
};

const client = new line.Client(config);

exports.kaijiScream = functions.https.onRequest(async (request, response) => {
  const events = request.body.events;
  const kaijilizedText = kaijilizer(events[0].message.text);
  const echo = {
    type: "text",
    text: kaijilizedText,
  };
  const result = await client.replyMessage(events[0].replyToken, echo);
  response.json(result);
});

const kaijilizer = (text) => {
  return text.split("").join("゛") + "゛";
};
