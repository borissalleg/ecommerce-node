const mongoose = require("mongoose");

const getConnection = async () => {
	try {
		const url =
			"mongodb://usuariobdtest:Pailas12@ac-p4wcy7z-shard-00-00.85pij9i.mongodb.net:27017,ac-p4wcy7z-shard-00-01.85pij9i.mongodb.net:27017,ac-p4wcy7z-shard-00-02.85pij9i.mongodb.net:27017/ecommerce-app-bd?ssl=true&replicaSet=atlas-6s562k-shard-0&authSource=admin&retryWrites=true&w=majority";
		await mongoose.connect(url);
		console.log("Conexion exitosa");
	} catch (error) {
		console.log(error);
	}
};
module.exports = {
	getConnection,
};
