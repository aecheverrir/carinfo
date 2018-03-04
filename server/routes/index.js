var path = require('path');
var router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'carinfo';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

/* GET home page */
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;
