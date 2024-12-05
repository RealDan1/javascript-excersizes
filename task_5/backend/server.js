const express = require('express');
const cors = require('cors');
const app = express();
// Define the port number for the server
const PORT = process.env.PORT || 6000;
// Enable Cross-Origin Resource Sharing
app.use(cors());
// Define the route to retrieve the message
app.get('/api/message', (req, res) => {
    const message = 'Hello from the back end!';
    res.json(message); // Send data as a response
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
