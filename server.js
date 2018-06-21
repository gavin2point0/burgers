var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var connection = require("./config/connection")

var app = express();

var PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var control = require("./controllers/burgers_controller")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  