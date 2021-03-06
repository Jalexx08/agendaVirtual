//* Express
const express = require("express");
const router = express.Router();

//* libraries

const bcrypt = require("bcrypt");

//* Models
const User = require("../models/user");

//* Login user
router.post("/login", async( req, res) => {
    const user = await User.findOne({ nickname: req.body.nickname });

    if(!user) return res.status(400).send("El nickname o password no coinciden");

    const hash = await bcrypt.compare( req.body.password, user.password );

    if(!hash) return res.status(400).send( "El nickname o password no coinciden");

    const jwtToken = user.generateJWT();

    return res.status(200).send({ jwtToken });
});

module.exports = router;