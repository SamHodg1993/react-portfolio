const express = require("express");
const app = express();
require("dotenv").config();
// const cors = require("cors");
// const something = require('../')

app.use(express.static("../client/build"));
// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

app.get("/cpp", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client", "cpp.html"));
});

app.get("/git", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client", "git.html"));
});

app.get("/js", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client", "js.html"));
});

app.get("/node-express", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client", "node-express.html"));
});

app.get("/react", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client", "react.html"));
});

app.get("/python", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client", "python.html"));
});

const PORT = process.env.PORT;
console.log("server started on port:", PORT);
app.listen(PORT);
