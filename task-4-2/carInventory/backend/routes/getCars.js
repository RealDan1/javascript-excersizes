const express = require('express');
// Use built-in Express router
const router = express.Router();
const carController = require('../controllers/cars.controller.js');

//create a new car
router.post('/add', carController.create);

module.exports = router;
