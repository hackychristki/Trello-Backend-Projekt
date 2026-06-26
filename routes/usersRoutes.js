const express = require('express');
const usersController = require('../controllers/usersController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post("/signup", authController.signup)

// router.route('/')
//     .get(cardsController.getAllUsers)
//     .post(cardsController.createUser);
    

// router.route('/:id')
//     .get(cardsController.getUser)
//     .patch(cardsController.updateUser)
//     .delete(cardsController.deleteUser);

module.exports = router