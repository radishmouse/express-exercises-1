const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const specialPeople = ['Oakley', 'Angela'];

function greetNice(whom) {
    return `How wonderfully splendid it is to be in your presence again, ${whom}!. You look magnificent today!`
}

function greetRegular(whom) {
    return `Hello, ${whom}!`
}

app.get('/:justTheName', (req, res) => {
    const {justTheName} = req.params; // destructuring!
    const isSpecial = specialPeople
                        .find(name => name.toLowerCase() === justTheName.toLowerCase());

    if (isSpecial) {
        res.send(greetNice(justTheName));
    } else {
        res.send(greetRegular(justTheName));
    }
});



server.listen(3000);