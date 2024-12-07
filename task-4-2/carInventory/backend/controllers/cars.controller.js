const Car = require('../models/car.model');

exports.create = async (req, res) => {
    try {
        // Create a new car
        const carModel = new Car({
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            owner: req.body.owner,
            registration: req.body.registration,
        });

        // Save the new car
        const savedCar = await carModel.save();

        // Success response
        res.send(savedCar);
        res.status(200).send({ message: 'The car has been added' });
    } catch (error) {
        res.status(500).send({ message: 'Some error occurred while creating the blog.' });
    }
};
