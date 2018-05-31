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

// Set Static Folder
app.use(express.static("client/build"));

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

server.listen(PORT, function() {
console.log(`🌎 ==> Server now on port ${PORT}!`)
});