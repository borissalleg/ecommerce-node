const { Schema, model } = require("mongoose");

const ProductoSchema = Schema({
	nombre: {
		type: String,
		require: true,
	},
	descripcion: {
		type: String,
		require: true,
	},
	precio: {
		type: Number,
		require: true,
	},
	foto: {
		type: String,
		require: true,
	},
	inventario: {
		type: Number,
		require: true,
	},
	vendedor: {
		type: Schema.Types.ObjectId,
		ref: "Vendedor",
		require: true,
	},
	marca: {
		type: Schema.Types.ObjectId,
		ref: "Marca",
		require: true,
	},
	categoria: {
		type: Schema.Types.ObjectId,
		ref: "Categoria",
		require: true,
	},
	fechaCreacion: {
		type: Date,
		require: true,
	},
	fechaActualizacion: {
		type: Date,
		require: true,
	},
});
module.exports = model("Producto", ProductoSchema);
