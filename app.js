//app.js
const express = require("express");
const cors = require("cors");
const path = require("path");
var bodyParser = require('body-parser');
var util = require("./utility");

var app = express();
var bp = bodyParser.urlencoded({extended: false});
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/**
 Create my-route
**/

// app.get('/', function(req, res) {
//     res.sendFile('public/index.html', { root: __dirname });
// });

app.post("/on_submit", function (req, res) {
  console.log(req.body);
});

app.get("/welcome", (req, res) =>
  res.send({
    error: false,
    message: "Welcome NodeJS, Express",
  })
);

app.get("/form.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/form.html"));
});

app.get("/login.html",(req, res) => {
  res.sendFile(path.join(__dirname + "/public/login.html"));
});

app.post("/", function (req, res) {
  var result = {
    student_id: req.body.student_id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
  };
  res.json(result);
});
app.get("/release", (req, res) => {
  res.status(400).send("error aria?");
});

app.get("/ok", (req, res) => {
  res.status(200).json({ status: true, result: " successful!" });
});


app.post("/on_login", function (req, res) {
  var email = req.body.txtEmail;
  var password = req.body.txtPassword;
});

app.get("/student/:student_id", function (req, res) {
  util.findStudentbyId(req.params.student_id, function (result) {
    // res.json(result);
    // console.log(result);
    res.send(result);
  });
});

/** specify the directory from where to serve static assets such as JavaScript, CSS, images **/

app.use(express.static(path.join(__dirname, "public")));

app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));
app.use(
  "/jquery-ui",
  express.static(__dirname + "/node_modules/jquery-ui/dist/")
);

/** remove fix route and use path solution **/
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Starting node.js on port " + port);
});
