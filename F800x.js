//const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.post("/alien", function (req, res) {
  res.end();

  console.log("************************************************");
  // req.body.tags?.map((tag) => console.log(tag.fields));
  // req.body.tags.map((tag) => console.log(tag.fields));
  console.log("||||||||||||||||||||||||||||||||||||||||||||||||");
  console.log(req.body);
  console.log("================================================");
});

app.listen(5000);
