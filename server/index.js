const { on } = require("events");
const express = require("express");
const cors = require('cors');

const app = express();
require("dotenv").config();
const nodemailer = require("nodemailer");
// const cors = require("cors");
// const something = require('../')

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

app.use(cors())
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

app.post('/contact/send', (req, res) => {
  const { title, body } = req.body;

  function sendEmail(title, body) {
    const html = `<!DOCTYPE html>
<html>
<head>
    <title>${title}</title>
    <style>
        /* CSS styles */
        body { font-family: Arial, sans-serif; background-color: rgb(240, 240, 240); margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 50vh; }
        .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f2f2f2; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
        h1 { text-align: center; color: black; }
        .header { margin-bottom: 20px; padding: 0 5rem; color: black; }
        .header h2 { text-align: center; }
        .code { text-align: center; font-size: 24px; font-weight: bold; padding: 15px; width: 70%; margin: 0 auto; background: linear-gradient(90deg, rgba(35, 37, 48) 1.74%, rgba(56, 58, 70) 99.86%); border: 1px solid lightgray; color: red; border-radius: 5px; }
        .RT-logo { width: 400px; height: 90px; margin: 0 auto; display: block; }
        .footer { text-align: center; margin-top: 20px; color: #888; }
    </style>
</head>
<body style="font-family: Arial, sans-serif; background-color: rgb(240, 240, 240); margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 50vh;">
    <div class="container" style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f2f2f2; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <p>${body}</p>
    </div>
</body>
</html>`;

    let info = transport.sendMail(
      {
        from: '"Razors Edge" <razorsedgesupport@razorthorn.com>',
        to: "samhodgkinson9192@gmail.com",
        subject: 'New message from the sam-hodgkinson.co.uk website...',
        html: html,
      },
      (error, info) => {
        if (error) {
          console.error(error);
        } else {
          return info;
        }
      }
    );

    return info;
  }
  sendEmail(title, body)
  res.status(200).send("Your request was received. Thankyou for reaching out!")
});

const PORT = process.env.PORT;
console.log("server started on port:", PORT);
app.listen(PORT);
