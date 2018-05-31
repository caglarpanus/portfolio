const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser =require("body-parser");
const mongoose = require("mongoose");
const sslRedirect = require("heroku-ssl-redirect");

const PORT = process.env.PORT || 3001;
const app = express();

const server = http.createServer(app);


mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/portfolio', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// SSL Redirect
app.use(sslRedirect());

// // Set Static Folder
// app.use(express.static("client/build"));

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'client/build')));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  console.log('YOU ARE IN THE PRODUCTION ENV');
  app.use('/static', express.static(path.join(__dirname, '../build/static')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/'));
  });
}

server.listen(PORT, function() {
console.log(`🌎 ==> Server now on port ${PORT}!`)
});