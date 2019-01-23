var express = require("express");
var connection = require("./config/connection")
var PORT = process.env.PORT || 8080;

var app = express();

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
connection.query("SELECT * FROM BURGERS", function(err, response) {
if (err) throw err;
console.log(response);
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  