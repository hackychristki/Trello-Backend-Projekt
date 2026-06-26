const List = require("./../model/listModel")

exports.getAllLists = async (req, res) => {
const lists = await List.find()

    res.status(200).json({
        status: "success",
        message: "Listen geholt Christofer!",
        results: lists.length,
        data: {
            lists
        }
    })
}