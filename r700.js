const express = require("express");
const app = express();
app.use(express.json());

app.post("/", function (req, res) {
  console.log("----------------------------\n", req.body);
  res.end();
});

app.listen(5000);
