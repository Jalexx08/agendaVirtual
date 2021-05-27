//* Express
const express = require("express");
const router = express.Router();

//*Libraries
const bcrypt = require("bcrypt");

//* Models
const User = require("../models/user");

//* Register user

router.post("/registerUser", async (req, res) => {
	let user = await User.findOne({ nickname: req.body.nickname });

	if (user)
		return res.status(400).send("No se puede registrar ese usuario, ya existe");

	//* Creating data user
	const hash = await bcrypt.hash(req.body.password, 10);

	user = new User({
		name: req.body.name,
		lastName: req.body.lastName,
		email: req.body.email,
		password: hash,
		name: req.body.name,
		nickname: req.body.nickname,
		phone: req.body.phone,
	});

    //* Saving data user in mongoDB

    const result = await user.save();

    if( result ){
        const jwtToken = user.generateJWT();
        res.status(200).send({ jwtToken });
    }else{
        return res,status(400).send("No se pudo registrar el usuario")
    }
});

module.exports = router; 
