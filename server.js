var express = require("express");
var app = express();
var request = require("request");
var port = 4300;

var apiUrl =
  'http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29';

app.get("/weather", (req, res) => {
  request(apiUrl, (err, response) => {
    if (err) throw err;
    res.send(response);
  });
});
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
