var express = require("express");
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
var app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)

app.use(express.static("site"));
app.use(express.json());

// POST method route
app.post("/patron-app", async function (req, res) {
  console.log("req", req.body);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 25,
    secure: false,
    auth: {
      user: "whitebuffalocoop@gmail.com", //email address to send from
      pass: "wbfeEmail22!", //the actual password for that account
    },
  });
  var mailOptions = {
    subject: "Patron Application",
  };
  mailOptions.to = req.body.email;
  mailOptions.from = "whitebuffalocoop@gmail.com";
  const hasphone = typeof req.body.phone !== "undefined";
  if (hasphone) {
    mailOptions.html = `<p>Name: ${req.body.name}</p>
    <p>Phone: ${req.body.phone}</p>
    <p>Email: ${req.body.email}</p>`;
  } else {
    mailOptions.html = `<p>Welcome new White Buffalo Alliance Member!</p>
    <p>Email: ${req.body.email}</p>`;
  }

  await transporter.sendMail(mailOptions, function (err, emlResponse) {
    if (err) {
      console.log("err", err);
      res.status(501).send(err);
    } else {
      res.status(201).send(emlResponse);
    }
  });
});

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/site/client-confirmation.html");
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Express app listening at http://%s:%s", host, port);
});
