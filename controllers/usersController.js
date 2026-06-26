const User = require("./../model/userModel")

exports.userLogin = ((req, res) =>{
    res.status(201).json({
        status: 'success',
        message: "User erstellt Kristofer(test)",
    })
})

exports.getAllUsers = async (req,res) =>{
    try{
        const users = await User.find()

        res.status(200).json({
            status: 'success',
            message: "gut gemacht Christofer alle Karten werden angezeigt",
            results: users.length,
            data: {
                users
            }
    });
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}