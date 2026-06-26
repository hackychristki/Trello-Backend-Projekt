const Card = require("./../model/cardModel")

exports.getAllCards = async (req, res) => {
    try{
        const cards = await Card.find()

        res.status(200).json({
        status: 'success',
        message: "gut gemacht Christofer alle Karten werden angezeigt",
        results: cards.length,
        data: {
            cards
        }
    });
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
    
};

exports.getCard = async (req, res) =>{
    try{
    const card = await Card.findById(req.params.id)
    
    res.status(200).json({
    status: 'success',
    message: "gut gemacht Christofer",
    data: {
        card: card
    }
    })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
    
}

exports.createCard =  async (req, res) =>{
    try{
        const newCard = await Card.create(req.body)

        console.log(req.params)
        res.status(201).json({
        status: 'success',
        message: "karte erstellt Kristofer(test)",
        data: {
            card: newCard
        }
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: "cration failed"
        })
    }

    
}

exports.updateCard = async (req, res) =>{
     try{
        const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
        status: 'success',
        message: "karte updatet Kristofer(test)",
        data: {
            card: card
        }
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: "cration failed"
        })
    }

}

exports.deleteCard = async (req, res) =>{
    // console.log(req.params.id)
    try{
    await Card.findByIdAndDelete(req.params.id)
    console.log(req.params.id)
    res.status(204).json({
    status: 'success',
    message: "Karte gelöscht Christofer!",
    data: null
    });
    }catch(err){
    res.status(400).json({
    status: 'fail',
    message: "Karte konnte NICHT gelöscht werden Christofer!",
    })
    }
}