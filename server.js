const express = require("express");
const path = require("path");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

require("dotenv").config();

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();

app.use(connectLiveReload());

const wweb = path.resolve(__dirname);

app.use(express.static(wweb));

app.all("/ping", (req, res) => {
  res.end("Workings");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `🌍  Server is running http://${process.env.LOCAL_HOST}:${process.env.SERVER_PORT}`
  );
});
