const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('Welcome');
});
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});

app.use(express.static('public'));
