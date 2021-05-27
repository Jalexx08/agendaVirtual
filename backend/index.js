//* Express
const express = require("express");
const app = express();

//* Libraries
const mongoose = require("mongoose");

//*Routes
const Auth = require("./routes/auth");
const Board = require("./routes/board");
const User = require("./routes/user");


//* Middlewares
app.use(express.json());
app.use("/api/auth/",Auth);
app.use("/api/board/",Board);
app.use("/api/user/",User);
//* Ports
const port = process.env.PORT || 3021;
app.listen(port, () => console.log("Servidor escuchando el puerto:", port));

//* Connect MongoDB
mongoose
	.connect("mongodb://127.0.0.1:27017/remindersdb", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => console.log("Conexion con MongoDB ON"))
	.catch((err) => console.log("Error al conectar con MongoDB", err));
