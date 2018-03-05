var path = require('path');
var router = require('express').Router();
var carrosRouter = require('./carros');
var reviewsRouter = require('./reviews');

//var config = require('../../config/database.js');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var bodyParser = require("body-parser");
// Connection URL

// BASE ROUTE
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/all', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/marca', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/modelo', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/motor', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/puntuacion', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/todos', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});
router.get('/addReview', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});
router.get('/idCarro', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

//router.use("/api/carros", carrosRouter);
//router.use("/api/reviews", reviewsRouter);



module.exports = router;