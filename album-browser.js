const http = require('http');
const PORT = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

const albums = require('./albums');

app.get('/', (req, res) => {
    console.log('Got a request!!!');
    res.send('Hello Express!');
});

app.get('/albums', (req, res) => {
    for (let album of albums.getAlbums()) {
        console.log(album.title);
        
        res.write(`      
        <p>
            <a href="/albums/${album.id}">
                ${album.title}
            </a>
        </p>
        `);
    }
    res.end();
});

// :albumId is a *placeholder*
// can't match the following:
// ? & = % /
app.get('/albums/:albumId', (req, res) => {
    // Express puts your
    // res.send(`You want: ${req.params.albumId}`);
    try {
        const songs = albums.getSongsForAlbum(req.params.albumId);
        res.json(songs);
    } catch (e) {
        console.log(e);
        console.log('================');
        res.status(404);
        res.send('Sorry! We could not find that one. Please pay us more money.');
    }
});

// /albums/42/songs 
app.get('/albums/:albumId/songs', (req, res) => {
    // "the songs for album 42"
    // res.send(`the songs for album ${req.params.albumId}`);
    const songs = albums.getSongsForAlbum(req.params.albumId);
    res.send(songs);
});

// /albums/42/songs/3
app.get('/albums/:albumId/songs/:songId(\\d+)', (req, res) => {
    // "song 3 on album 42"
    const songs = albums.getSongsForAlbum(req.params.albumId);
    for (let song of songs) {
        // The values in req.params will *always*
        // be strings.
        // Intentionally using "loose" comparison.
        if (song.id == req.params.songId) {
            res.write(song.title);
        }
    }
    res.end(); 
});

app.get('/albums/:albumId/songs/guest', (req, res) => {
    res.send('It had the best guest artists ever.');
});

// important: leading slash
// also important: order!

// add a catch-all
// - order matters. if this route handler is run by express
//   that means nothing above matched
// - '*' will match anything
// - res has methods....

app.get('*', (req, res) => {
    console.log("Redirecting, because no page here.");
    res.redirect('/albums');
})

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});