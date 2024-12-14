const express = require('express');
// Use built-in Express router
const router = express.Router();
const carController = require('../controllers/cars.controller.js');

//create a new car
router.post('/add', carController.create);

//fetch all cars
router.get('', carController.getAllCars);

router.delete('/:id', carController.deleteCar);

module.exports = router;
