const functions = require("firebase-functions");
const line = require("@line/bot-sdk");
require("dotenv").config();

exports.helloWorld = functions.https.onRequest(async (req, res) => {
  const events = req.body.events;
  const client = new line.Client({
    channelAccessToken: functions.config().line.channel_access_token,
    channelSecret: functions.config().line.channel_secret,
  });
  const kaijilizedText = kaijilizer(events[0].message.text);
  const result = await client.replyMessage(events[0].replyToken, {
    type: "text",
    text: kaijilizedText,
  });
  res.json(result);
});

const kaijilizer = (text) => {
  return text.split("").join("゛") + "゛";
};
