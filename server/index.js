const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const nodemailer = require("nodemailer");
const path = require("path");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const apiFile = require('./apiFile.json');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/api/", (req, res) => {
  console.log("Hello from the /api/ endpoint");
  res.status(200).send("Hello from the /api/ endpoint");
});

app.get("/api/dadJoke/:apiKey", (req,res) => {
	const {apiKey} = req.params;
	const correctApiKey = "DadJoke"
	if(apiKey!== correctApiKey) return res.status(404).send("Unauthorised");
	const randNum = Math.floor(Math.random() * 101);
	const randJoke = apiFile["dadJokes"][randNum]
	res.send(randJoke);
});

app.get("/api/amadiusFact/:apiKey", (req,res) => {
	const {apiKey} = req.params;
	const key ="AmadiusFact"
	if(apiKey !== key) return res.status(404).send("Unauthorised");
	const randNum = Math.floor(Math.random() * 10);
	const randJoke = apiFile["tomFacts"][randNum]
	res.send(randJoke);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

app.use(express.static("../client/build"));

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
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "../client", "node-express.html"));
});

app.get("/react", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client", "react.html"));
});

app.get("/python", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client", "python.html"));
});

app.post("/api/contact/send", (req, res) => {
  const { title, body } = req?.body;

  console.log("About to send email");

  const contactTitle = title;
  const contactBody = body;

  if (!contactTitle || !contactBody) {
    return res
      .status(400)
      .send("Please provide a title AND body for the form.");
  }

  function sendEmail(contactTitle, contactBody) {
    const html = `<!DOCTYPE html>
<html>
<head>
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
          <h3 style="text-align: center;">New message from the sam-hodgkinson.co.uk website...</h3>
        <div class="code" style="text-align: center; font-size: 24px; font-weight: bold; padding: 15px; width: 70%; margin: 0 auto; background: linear-gradient(90deg, rgba(35, 37, 48) 1.74%, rgba(56, 58, 70) 99.86%); border: 1px solid lightgray; color: red; border-radius: 5px;">
          ${contactTitle}
        </div>
        <div style="text-align: left; font-size: 12px; padding: 15px; width: 70%; margin: 0 auto; border: 1px solid lightgray; border-radius: 5px;">
          <p>${contactBody}</p>
        </div<
        <div class="footer" style="text-align: center; margin-top: 20px; color: #888;">
            <p>This email was sent from the sam-hodgkinson.co.uk website.</p>
        </div>
    </div>
</body>
</html>`;

    let info = transport.sendMail(
      {
        from: '"Razors Edge" <razorsedgesupport@razorthorn.com>',
        to: "samhodgkinson9192@gmail.com",
        subject: "New message from the sam-hodgkinson.co.uk website...",
        html: html,
      },
      (error, info) => {
        if (error) {
          console.error(error);
        } else {
          return info;
        }
      },
    );

    return info;
  }
  sendEmail(contactTitle, contactBody);
  res.status(200).send("Your request was received. Thankyou for reaching out!");
});

const PORT = process.env.PORT;
console.log("server started on port:", PORT);
app.listen(PORT);
