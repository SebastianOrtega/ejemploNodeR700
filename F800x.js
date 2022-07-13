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
  console.log("||||||||||||||||||||||||||||||||||||||||||||||||");
  console.log(req.body);
  console.log("================================================");
});

app.listen(5000);
