//* Libraries
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

//* Schema User
const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password:String,
    nickname: String,
    phone:String,
    date: { type: Date, default: Date.now}

});

//* JWT to user
userSchema.methods.generateJWT = function() {
    return jwt.sign({
        _id:this._id,
        name: this.nickname,
        iat: moment().unix()
    },"scretsByOurs")
}

//* Collection  user in mongoDB
const User = mongoose.model("user", userSchema);

module.exports = User;