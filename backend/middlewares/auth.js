//* Libraries
const jwt = require("jsonwebtoken");

//* Autentication middlewares
const auth = ( req, res, next ) => {
    let jwtToken = req.header("Authorization");

    if(!jwtToken) return status(400).send("Autorización denegada: No hay token");

    jwtToken = jwtToken.split(" ")[1];

    if(!jwtToken) return status(400).send("Autorización denegada: No hay token");

    try {
        const payload = jwt.verify( jwtToken, "scretsByOurs");
        req.user = payload;
        next();

    } catch (error) {
        return res.status(400).send("Autorización denegada: token no válido");
    }
};

module.exports = auth;