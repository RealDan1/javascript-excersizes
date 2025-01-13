//backend/controllers/itunesApiController.js

const jwt = require('jsonwebtoken');
const axios = require('axios');

const searchItunes = async (req, res) => {
    const isFirstRequest = req.isFirstRequest;
    const { searchTerm, mediaType } = req.query; // deconstruct the searchTerm and mediaType from the req.query.

    if (isFirstRequest) {
        //create a new payload with id Date.now - just to have something to sign into the token
        // Create a JWT token payload
        //--------------------------------
        const payload = {
            id: Date.now,
        };
        // Generate the token for the first time -  sign the token with the payload
        const token = jwt.sign(JSON.stringify(payload), 'HyperionDev', {
            algorithm: 'HS256',
        });

        //do the request with the searchTerm and mediaType:

        //-----------------------------------------
        try {
            //-----------------------------------------
            const itunesResponse = await axios.get('https://itunes.apple.com/search?', {
                params: { term: searchTerm }, // Sending query parameters
            });
            //return the result and the token in the response object
            res.json({ itunesResponse: itunesResponse.data, token: token });
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    } else {
        //otherwise its not the first request and should include a token with an id:
        const { id } = req.payload;
        //do the request with the searchTerm and mediaType:
        //-----------------------------------------
        try {
            //-----------------------------------------
            const itunesResponse = await axios.get('https://itunes.apple.com/search', {
                params: { term: searchTerm, country: 'ZA' }, // Sending query parameters
            });

            //console.log the response for testing
            console.log({ itunesResult: itunesResponse.data, token: token });

            //return the result and the token in the response object
            res.json({ itunesResult: itunesResponse.data, token: token });
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    }
};

module.exports = { searchItunes };
