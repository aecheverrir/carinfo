const mongoose = require("mongoose");

const CarroSchema = new mongoose.Schema({
	id: Number,
	marca: String,
	anio: Number,
	pais: String,
	modelo: String,
	linea: String,
	puertas: Number,
	motor: Number,
	transmicion: String
});

module.exports = mongoose.model("Carro", CarroSchema);

