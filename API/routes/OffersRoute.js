const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const OffersController = require('../controllers/OffersController');


router.get("/", OffersController.get_all_offers);

router.post("/", OffersController.add_new_offer);


module.exports = router;
