const { Router } = require("express");
const Vendedor = require("../models/Vendedor");
const router = Router();

router.post("/", async function (req, res) {
	try {
		let vendedor = new Vendedor();
		vendedor.nombre = req.body.nombre;
		vendedor.fechaCreacion = new Date();
		vendedor.fechaActualizacion = new Date();

		vendedor = await vendedor.save();

		res.send("metodo post en vendedor");
		console.log("metodo post en vendedor");
	} catch (error) {
		console.log(error);
	}
});
router.get("/", async function (req, res) {
	try {
		const vendedors = await Vendedor.find();
		res.send(vendedors);
		console.log("Se han listado las vendedors existentes");
	} catch (error) {
		console.log(error);
	}
});

router.put("/:vendedorId", async function (req, res) {
	try {
		let vendedor = await Vendedor.findById(req.params.vendedorId);
		if (!vendedor) {
			return res.send("No existe la vendedor");
		}
		vendedor.nombre = req.body.nombre;
		vendedor.fechaActualizacion = new Date();
		vendedor = await vendedor.save();
		res.send(vendedor);
		console.log("Se ha actualizado la vendedor exitosamente ");
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
