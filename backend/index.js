var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public', {redirect: false}));

var server = app.listen(3000, function () {
   console.log("App listening at http://localhost:3000")
})

require('./app/route.js')(app);