//* Express
const express = require("express");
const router = express.Router();

//* Models
const Board = require("../models/board");
const User = require("../models/user");

//* Middlewares
const Auth = require("../middlewares/auth");

//* register a reminder
router.post("/saveReminder",Auth, async (req, res) => {
	const user = await User.findById(req.user._id);

	if (!user) return res.status(400).send("Usuario no autenticado");

	//* Creating data board

	const board = new Board({
		userId: user._id,
		nickname: req.body.nickname,
		description: req.body.description,
		status: "reminder",
	});

	//* Saving data board in mongoDB

	const result = await board.save();
	return res, status(200).send({ result });
});

module.exports = reouter;
