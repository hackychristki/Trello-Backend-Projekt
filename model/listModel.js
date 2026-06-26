const mongoose = require("mongoose");

const listsSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: [true, "A list must have a name"],
        unique: true
    },
    idBoard: {
        type: String,
        required: [true, "A list must belong to a board"]
    },
    pos: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: String,
        default: Date.now
    }
},
{
    _id: true
});

const List = mongoose.model("List", listsSchema);

module.exports = List;