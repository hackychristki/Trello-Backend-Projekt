exports.getAllCards = ((req, res) => {
//   const features = new APIFeatures(Cards.find(), req.query)
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate();
//   const cards = await features.query;

  // SEND RESPONSE
 
  res.status(200).json({
    status: 'success',
    message: "gut gemacht Christofer"
    // results: cards.length,
    // data: {
    //   cards
    // }
  });
});

exports.getCard = ((req, res) =>{
    console.log(req.params)
    res.status(200).json({
    status: 'success',
    message: "gut gemacht Christofer",
    })
})

exports.createCard = ((req, res) =>{
    console.log(req.params)
    res.status(200).json({
    status: 'success',
    message: "karte erstellt Kristofer(test)",
    })
})

exports.updateCard = ((req, res) =>{
    res.status(200).json({
    status: 'success',
    message: "karte updatet Christofer!",
    })
})

exports.deleteCard = ((req, res) =>{
    res.status(200).json({
    status: 'success',
    message: "Karte gelöscht Christofer!",
    })
})