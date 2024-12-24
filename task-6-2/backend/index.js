const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;

// Allows us to parse the body of a request
app.use(bodyParser.json());

// User login endpoint
app.post('/login', (req, res) => {
    // Req.body is sent by the client
    const usr = req.body.username;
    const pwd = req.body.password;

    //remove and replace this section:
    //res.send(`Username: ${usr}\n Password: ${pwd}`)

    if (usr === 'zama' && pwd === 'secret') {
        payload = {
            name: usr,
            admin: true,
        };
        const token = jwt.sign(JSON.stringify(payload), 'jwt-secret', { algorithm: 'HS256' });
        res.send({ token: token });
    } else {
        res.status(403).send({ err: 'Incorrect login!' });
    }
});

app.get('/resource', (req, res) => {
    const auth = req.headers['authorization'];
    const token = auth.split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'jwt-secret');
        res.send({
            msg: `Hello, ${decoded.name}! Your JSON Web Token has been verified.`,
        });
    } catch (err) {
        res.status(401).send({ err: 'Bad JWT!' });
    }
});

app.get('/admin_resource', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'jwt-secret');
        if (decoded.admin) {
            res.send({ msg: 'Success!' });
        } else {
            res.status(403).send({ msg: 'Your JWT was verified, but you are not an admin.' });
        }
    } catch (error) {
        res.sendStatus(401);
    }
});

// Start the server
app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
