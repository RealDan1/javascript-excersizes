const express = require('express');
// Use built-in Express router
const router = express.Router();
const carController = require('../controllers/cars.controller.js');

//create a new car
router.post('/add', carController.create);

//fetch all cars
router.get('', carController.getAllCars);

//delete a car
router.delete('/:id', carController.deleteCar);

//update a car
router.put('/:id', potionController.deletePotion);
module.exports = router;
