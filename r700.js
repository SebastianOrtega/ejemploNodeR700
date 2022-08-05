const express = require("express");
const app = express();
app.use(express.json());

function hex_to_ascii(str1) {
  var hex = str1.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}

app.post("/", function (req, res) {
  //console.log("----------------------------\n", req.body);

  req.body.map((tag) => {
    console.log(hex_to_ascii(tag.tagInventoryEvent.epcHex).substring(8));
  });
  res.end();
});

app.listen(5000);
