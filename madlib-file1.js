const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const server = http.createServer(app);

// Alternatively, we could have used `readFileSync` to read the file contents
// before we create and start the server.
fs.readFile('templates/madlib.html', (err, data) => {
    const madlibHTML = data.toString();
    app.get('/:justTheName', (req, res) => {
        const {justTheName} = req.params; // destructuring!
        const updatedHTML = madlibHTML.replace('***NAME***', justTheName);
        res.send(updatedHTML);
    });
    
});

server.listen(3000);
