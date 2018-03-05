const express = require('express');
const router = express.Router();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var Carro = require('../models/Carro');
var Review = require('../models/Review');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'carinfo';




//carros
function findCarros (db, query, callback) {
  // Get the documents collection
  const collection = db.collection('carros');
  // Find some documents
  collection.find(query).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records " +docs.lenght);
    callback(docs);
  });
}
 function findAll (db, query, callback) {
   // Get the documents collection
   const collection = db.collection('carros');
   // Find some documents
   collection.find({}).toArray(function(err, docs) {
     assert.equal(err, null);
     console.log("Found the following records " +docs.lenght);
     callback(docs);
   });
 }


function getCarros(query, callback){
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  if(query === a){
  	findAll(db, query, callback);
   // findCarros(db, query, callback);
  }

  findCarros(db, query, callback);

  client.close();
});
}

router.get('/all', function (req, res) {
   getCarros(
   a,
  (carros) =>{
    console.log("Entra SIN FILTRO: ")
    res.send(carros);
  });
 });


router.get('/marca/:marca', function (req, res) {
  getCarros(
  {marca: req.params.marca},
  (carros) =>{
    console.log("Entra con filtro: MARCA")
    res.send(carros);
  });
});

router.get('/pais/:pais', function (req, res) {
  getCarros(
  {pais: req.params.pais},
  (carros) =>{
    console.log("Entra con filtro: PAIS ")
    res.send(carros);
  });
});

router.get('/puertas/:puertas', function (req, res) {
  getCarros(
  {puertas: req.params.puertas},
  (carros) =>{
    console.log("Entra con filtro: PUERTAS ")
    res.send(carros);
  });
});

router.get('/anio/:anio', function (req, res) {
  getCarros(
  {anio: req.params.anio},
  (carros) =>{
    console.log("Entra con filtro: Año ")
    res.send(carros);
  });
});

router.get('/transmicion/:transmicion', function (req, res) {
  getCarros(
  {transmicion: req.params.transmicion},
  (carros) =>{
    console.log("Entra con filtro: TRANSMICION ")
    res.send(carros);
  });
});


 router.get('/modelo/:modelo', function (req, res) {
  getCarros(
  {modelo: req.params.modelo},
  (carros) =>{
    console.log("Entra con filtro: MODELO ")
    res.send(carros);
  });
});

router.get('/motor/:motor', function (req, res) {
  getCarros(
  {motor: req.params.motor},
  (carros) =>{
    console.log("Entra con filtro: MOTOR ")
    res.send(carros);
  });
}); 


module.exports = router;