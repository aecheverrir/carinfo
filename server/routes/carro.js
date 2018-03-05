var router = require("express").Router();
var Carro = require("../models/Carro");
var mongoose = require("mongoose");
var config = require("../../config/database.js");

router.get("/", (req, res) => {
	Carro.find({}, (err, carros) => {
		var carMap = [];

		carros.forEach(function(car) {
			carMap.push(car);
		}) ;
		//res.send(carMap);
		res.json(carMap);
	});
});

module.exports = router;