var express = require("express");
var app = express();
var bodyParser = require ("body-parser");

var PORT = process.env.PORT 

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.unlencoded({ extended: false})

appjson.use(bodyParser.json({type:"application/**"}))

app.use(bodyParser.raw({ type: "application/VRDisplayEvent.custom-type"}))

// Sets up the Express app to handle data parsing
app.use(bodyParser.text({ type: "text/html"}))


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

