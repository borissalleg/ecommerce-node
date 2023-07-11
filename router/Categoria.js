const { Router } = require("express");
const Categoria = require("../models/Categoria");
const router = Router();

router.post("/", async function (req, res) {
	try {
		let categoria = new Categoria();
		categoria.nombre = req.body.nombre;
		categoria.fechaCreacion = new Date();
		categoria.fechaActualizacion = new Date();

		categoria = await categoria.save();

		res.send("metodo post en Categoria");
		console.log("metodo post en Categoria");
	} catch (error) {
		console.log(error);
	}
});
router.get("/", async function (req, res) {
	try {
		const categorias = await Categoria.find();
		res.send(categorias);
		console.log("Se han listado las categorias existentes");
	} catch (error) {
		console.log(error);
	}
});

router.put("/:categoriaId", async function (req, res) {
	try {
		let categoria = await Categoria.findById(req.params.categoriaId);
		if (!categoria) {
			return res.send("No existe la categoria");
		}
		categoria.nombre = req.body.nombre;
		categoria.fechaActualizacion = new Date();
		categoria = await categoria.save();
		res.send(categoria);
		console.log("Se ha actualizado la categoria exitosamente ");
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
