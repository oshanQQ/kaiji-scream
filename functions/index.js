import * as functions from "firebase-functions";
import * as line from "@line/bot-sdk";
import express from "express";

const config = {
  channelAccessToken: functions.config().linebot.token,
  channelSecret: functions.config().linebot.secret,
};

const app = express();
app.post("/webhooks", line.middleware(config), (request, response) => {
  return Promise.all(request.body.events.map(handleEvent)).then((result) =>
    response.json(result)
  );
});

const client = new line.Client(config);
async function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }

  return replyWithText("メッセージを受け取りました！", event);
}

async function replyWithText(message, event) {
  return client.replyMessage(event.replyToken, {
    type: "text",
    text: message,
  });
}

export const lineBot = functions.https.onRequest(app);
