const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

function greetingFor(whom) {
    const specialPeople = {
        "Oakley": "How wonderfully splendid it is to be in your presence again!",
        "Chris": "Oh hey...",
        "Milla": "Hello there"
    };

    const greeting = specialPeople[whom] || `Hello, ${whom}!`;

    return greeting;
}

app.get('/:justTheName', (req, res) => {
    const {justTheName} = req.params; // destructuring!
    res.send(greetingFor(justTheName));
});

server.listen(3000);