const express = require("express");
const { getConnection } = require("./bd/db-commect-mongo");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
app.use(cors());
getConnection();
app.use(express.json());
app.use("/categoria", require("./router/Categoria"));
app.use("/marca", require("./router/Marcas"));
app.use("/vendedor", require("./router/Vendedor"));
app.use("/producto", require("./router/Productos"));

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
