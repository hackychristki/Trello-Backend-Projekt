const Card = require("./../model/cardModel");

exports.getAllCards = async (req, res) => {
    try {
        const cards = await Card.find();

        res.status(200).json({
            status: "success",
            results: cards.length,
            data: {
                cards,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.getCard = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                card: card,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.createCard = async (req, res) => {
    try {
        const newCard = await Card.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                card: newCard,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "creation failed",
        });
    }
};

exports.updateCard = async (req, res) => {
    try {
        const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "success",
            data: {
                card: card,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "update failed",
        });
    }
};

exports.deleteCard = async (req, res) => {
    try {
        await Card.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "success",
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "deletion failed",
        });
    }
};