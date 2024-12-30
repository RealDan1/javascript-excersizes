const express = require('express');
const loginRoute = require('./routes/loginRoute');
const userDataRoute = require('./routes/secure/userDataRoute');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//use the loginRoute in the app
loginRoute(app);

userDataRoute(app);

//Listening on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
