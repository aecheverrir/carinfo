const Counter = require('../../models/Review');

module.exports = (app) => {
  app.get('/api/reviews', (req, res, next) => {
    Review.find()
      .exec()
      .then((review) => res.json(review))
      .catch((err) => next(err));
  });

  app.post('/api/reviews', function (req, res, next) {
    const review = new Review();

    review.save()
      .then(() => res.json(review))
      .catch((err) => next(err));
  });

  app.delete('/api/reviews/:id', function (req, res, next) {
    Review.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((review) => res.json())
      .catch((err) => next(err));
  });



















// var path = require('path');
// var router = require('express').Router();
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// var bodyParser = require("body-parser");
// const url = 'mongodb://localhost:27017';

// var bodyParser = require("body-parser");
// var mongoose = require('mongoose');
// //var Carro = require('../models/Carro');
// //var Review = require('../models/Review');
// // Database Name
// const dbName = 'carinfo';
// const a = -1;

// //Reviews
// // Insert Review
// function addReview (db, query, callback) {
  
//   const collection = db.collection('reviews'); 
// 	var result = query.add.split(",");
// 	 console.log(result);
// var iD = result[0];
// var car = result[1];
// var puntuation = result[2];

// var nuevo ={"id":"'"+iD+"'","idcarro":"'"+car+"'","puntuacion":"'"+puntuation+"'"};
// 	console.log(nuevo);
//   collection.insert(nuevo,
//    (err, result)=> {
//    	if (err) throw err;
//    	console.log("Entraa a GUARDAR");
//     callback(result);
//   });
// }

// function findReviews (db, query, callback) {
//   // Get the documents collection
//   const collection = db.collection('reviews');
//   // Find some documents
//   collection.find(query).toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records " +docs.lenght);
//     callback(docs);
//   });
// }





// function postReview(query, callback){
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   addReview(db, query, callback);

//   client.close();
// });
// }


// function getReviews(query, callback){
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   findReviews(db, query, callback);

//   client.close();
// });
// }
// // REVIEWS
// router.get('/addReview/:add', (req, res) =>{
// 	postReview(
// 		{add: req.params.add},
// 		(reviews) =>{
// 			res.send(reviews);
// 		});
// });

// router.get('/idCarro/:idcarro', function (req, res) {
//   getReviews(
//   {idcarro: req.params.idcarro},
// 	(reviews) =>{
// 		console.log("Entra con filtro: idcarro")
// 		res.send(reviews);
// 	});
// });

// router.get('/todos', function (req, res) {
//   getReviews(
//   {idcarro: req.params.idcarro},
//   (reviews) =>{
//     console.log("Entra con filtro: idcarro")
//     res.send(reviews);
//   });
// });
