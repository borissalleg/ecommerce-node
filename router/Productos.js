const { Router } = require("express");
const Producto = require("../models/Producto");
const router = Router();

router.post("/", async function (req, res) {
	try {
		let producto = new Producto();

		producto.nombre = req.body.nombre;
		producto.descripcion = req.body.descripcion;
		producto.precio = req.body.precio;
		producto.foto = req.body.foto;
		producto.inventario = req.body.inventario;
		producto.vendedor = req.body.vendedor._id;
		producto.marca = req.body.marca._id;
		producto.categoria = req.body.categoria._id;

		producto.fechaCreacion = new Date();
		producto.fechaActualizacion = new Date();

		res.send(producto);
		producto = await producto.save();

		console.log("metodo post en producto");
	} catch (error) {
		console.log(error);
	}
});
router.get("/", async function (req, res) {
	try {
		const productos = await Producto.find();
		res.send(productos);
		console.log("Se han listado las productos existentes");
	} catch (error) {
		console.log(error);
	}
});

router.put("/:productoId", async function (req, res) {
	try {
		let producto = await Producto.findById(req.params.productoId);
		if (!producto) {
			return res.send("No existe la producto");
		}
		producto.nombre = req.body.nombre;
		producto.descripcion = req.body.descripcion;
		producto.precio = req.body.precio;
		producto.foto = req.body.foto;
		producto.inventario = req.body.inventario;
		producto.vendedor = req.body.vendedor._id;
		producto.marca = req.body.marca._id;
		producto.categoria = req.body.categoria._id;
		producto.fechaActualizacion = new Date();
		producto = await producto.save();
		res.send(producto);
		console.log("Se ha actualizado la producto exitosamente ");
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
