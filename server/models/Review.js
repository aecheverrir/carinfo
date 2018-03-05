const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
	id: Number,
	puntuacion: Number,
	idcarro: [{type: mongoose.Schema.Types.ObjectId, ref: 'Carro'}]
});

module.exports = mongoose.model("Review", ReviewSchema);
