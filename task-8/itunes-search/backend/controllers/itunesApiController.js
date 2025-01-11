const jwt = require('jsonwebtoken');

const searchItunes = async (req, res) => {
    const isFirstRequest = req.isFirstRequest;
    const { searchTerm, mediaType } = req.params; // deconstruct the searchTerm and mediaType from the req.params.

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
            expiresIn: '3h', // Set token expiration to 3h for dev purposes
        });

        //do the request with the searchTerm and mediaType:
        //api request goes here:
        //-----------------------------------------

        try {
            const itunesResponse = {}; //here
            //return the result and the token in the response object
            res.json({ itunesResponse: itunesResponse, token: token });
        } catch (error) {}
    } else {
        //otherwise its not the first request and should include a token with an id:
        const { id } = req.payload;
        //do the request with the searchTerm and mediaType:
        //api request goes here:
        //-----------------------------------------
        try {
            const itunesResult = {}; //here
            //return the result and the token in the response object
            res.json({ itunesResult: itunesResult, token: token });
        } catch (error) {}
    }
};

module.exports = { searchItunes };
