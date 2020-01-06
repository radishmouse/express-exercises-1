const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/:justTheName', (req, res) => {
    res.send(`Hello ${req.params.justTheName}`);
});

server.listen(3000);