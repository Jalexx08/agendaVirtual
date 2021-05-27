//* libraries
const mongoose = require("mongoose");

//* Schema board

const boardSchema = new mongoose-mongoose.Schema({
    userId: String,
    name: String,
    description: String,
    status: String,
    date:({ type: Date, default: Date.now })
});

//* Collection board in mongoDB
const Board = mongoose.model("board", boardSchema );


module.exports = Board;