const express = require('express');
const cardsController = require('./../controllers/cardsController');

const router = express.Router();

router.route('/')
    .get(cardsController.getAllCards)
    .post(cardsController.createCard);
    

router.route('/:id')
    .get(cardsController.getCard)
    .patch(cardsController.updateCard)
    .delete(cardsController.deleteCard);

//   .post(tourController.createTour);

// router.route("/:id").get(cardsController.getAllCards)

module.exports = router