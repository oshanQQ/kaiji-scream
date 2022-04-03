# kaiji-scream

LINE のチャット上でメッセージを送信すると、カイジが叫びながらオウム返ししてくれます。

![](./assets/line-talk-display.png)

# 仕様技術

- ## Node.js

  `js`ファイルで処理を記述しています。

- ## Firebase Functions

  Firebase Functions 上で Node を動かしています。

- ## LINE Messaging API

  LINEbot がメッセージを受け取った時の LINE 側の処理を、いい具合にやってくれます。

- ## GitHub Actions

  Firebase Functions へのデプロイや、環境変数の設定を自動化しています。
