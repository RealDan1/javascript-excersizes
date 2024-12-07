const mongoose = require('mongoose');

//initialize our schema
const carSchema = mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
