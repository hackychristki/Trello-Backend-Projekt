const mongoose = require("mongoose")
const cardsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A card must have a name"], //Validator
        unique: true
    },
    desc: {
        type: String,
        default: "No description"
    },
    idList: {
        type: String,  
    },
    due: String,
    pos: Number,
    createdAt: String,
}, {
        _id: true
    })
const Card = mongoose.model("Card", cardsSchema)

module.exports = Card