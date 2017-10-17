//package and module requirements
var express = require('express')
var bodyParser = require('body-parser');

//rockenroll
var app = express();
var port = 3000;

//middleware
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//default
app.all('[^.]+', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
});

// main error handlers

app.use(function(req, res, next){
  var err = new Error('Page Not found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

//start the server
app.listen(port, function() {
  console.log("SEARCH NO MORE - I'm your developer -- check port: " + port);
});
