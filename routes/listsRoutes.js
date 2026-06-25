const express = require('express');
const listsController = require('./../controllers/listsController');

const router = express.Router();


router.route("/").get(listsController.getAllLists);



module.exports = router