const express = require('express');
const cors = require('cors');
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const userDataRoute = require('./routes/secure/userDataRoute');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());

//use the various routes in the app
registerRoute(app);
loginRoute(app);
userDataRoute(app);

//Listening on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
