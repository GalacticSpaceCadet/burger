//set up the npm dependencies
 var express = require("express");
 var methodOveride = require("method-override")
 var bodyParser = require("body-parser");

//inform node we are creating an express server

var app = express();

//set the PORT number for the server

var PORT = proces.env.PORT || 3000

//grab the static content from "/public"

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({extended: false}));

// use methodOverside to instead return ?_method=DELETE
app.use(methodOveride("method"));

// set up var to allow handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set up the routes so server knows where to grab data from
var routes=require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
