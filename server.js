'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('This is my test GET request');
});

app.post('/', (req, res) => {
    res.send(req.body + 'REQUEST BODY OF POST')
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);