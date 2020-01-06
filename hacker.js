const http = require('http');
const express = require('express');
const app = express();
const faker = require('faker');
const server = http.createServer(app);

app.get('*', (req, res) => {
    const parts = req.url.split('/'); // grabs the parts separated by '/'
    let result = '';

    for (let part of parts) {        
        if (part === 'adjective') {
            result += faker.hacker.adjective();
        }
        if (part === 'noun') {
            result += faker.hacker.noun();
        }
        if (part === 'verb') {
            result += faker.hacker.verb();
        }
        if (part === 'abbreviation') {
            result += faker.hacker.abbreviation();
        }
        if (part === 'ingverb') {
            result += faker.hacker.ingverb();
        }
        if (part === 'phrase') {
            result += faker.hacker.phrase();
        }

        result += ' '
    }
    res.send(result);
});

server.listen(3000);
