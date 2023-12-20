const exp = require('constants');
const express = require('express');
const app = express();
const port = 6117;

const path = require('path');

app.use("/public/", express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join('/index.html'));
});

app.get('/secondPage', (req, res) => {
    res.sendFile(path.join(__dirname + '/secondPage.html'))
});

console.log('Server is running on port ' + port)
app.listen(port);