const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const server = http.createServer(app);

// Alternatively, we could have used `readFileSync` to read the file contents
// before we create and start the server.
fs.readFile('templates/madlib2.html', (err, data) => {
    const madlibHTML = data.toString();
    app.get('/:justTheName/:thePlace', (req, res) => {
        const {justTheName, thePlace} = req.params; // destructuring!
        let updatedHTML = madlibHTML.replace('***NAME***', justTheName);        
        updatedHTML = updatedHTML.replace('***PLACE***', thePlace);
        res.send(updatedHTML);
    });
    
});

server.listen(3000);
