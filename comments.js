//Create web server
//Create web server
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var comments = [];
app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});
app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'style.css'));
});
app.get('/app.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'app.js'));
});
server.listen(8080, function() {
  console.log('Server listening on port 8080');
});
