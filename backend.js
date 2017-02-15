var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

var books = [
  {
    name: 'AngularJS'
  },
  {
    name: 'ReactJS'
  }
];

var books2 = [
  {
    name: 'AngularJS 2'
  },
  {
    name: 'ReactJS 2'
  }
];

var books3 = [
  {
    name: 'AngularJS 3'
  },
  {
    name: 'ReactJS 3'
  }
];

app.get('/get1', function (req, res) {
  res.send(books);
});
app.get('/get2', function (req, res) {
  res.send(books2);
});
app.get('/get3', function (req, res) {
  res.send(books3);
});

var server = app.listen(3001, function () {
  console.log('backend started');
});