//import dependencies
//would have imported dotenv for secure DB password but not needed at this point (all open source)
const uri =
    'mongodb+srv://daneelvdm:<Mongoisgod1>@doncluster.uw8qd.mongodb.net/?retryWrites=true&w=majority&appName=DonCluster'; // process.env.MONGO_URI; would have been here if used dotenv
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import routes
const getCars = require('./routes/getCars');

// Initialize express
const app = express();

// Set up port for server to listen on
const PORT = process.env.PORT || 8080;
