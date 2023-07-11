const { Router } = require("express");
const Marca = require("../models/Marca");
const router = Router();

router.get("/", async function (req, res) {
	try {
		const marcas = await Marca.find();
		res.send(marcas);
		console.log("Metodo get en Marca");
	} catch (error) {
		console.log("error");
	}
});

router.post("/", async function (req, res) {
	try {
		let marca = new Marca();
		marca.nombre = req.body.nombre;
		marca.fechaCreacion = new Date();
		marca.fechaActualizacion = new Date();
		marca = await marca.save();
		res.send(marca);
		console.log("Metodo post en Marca");
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
