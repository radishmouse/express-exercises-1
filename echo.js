const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/:message', (req, res) => {
    res.send(req.params.message);
})

server.listen(3000);