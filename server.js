const http = require("http");
require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
console.log("Service is up")
  console.log(`listening on port ${process.env.PORT}`);
});
