const http = require('http');
const PORT = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.use(express.static('public'))

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const partials = {
    header: 'partials/header',
    footer: 'partials/footer'
};

const albums = require('./albums');

app.get('/', (req, res) => {
    console.log('Got a request!!!');
    res.send('Hello Express!');
});

app.get('/albums', (req, res) => {
    const albumsList = [];
    for (let album of albums.getAlbums()) {
        console.log(album.title);
        
        albumsList.push(`      
        <p>
            <a href="/albums/${album.id}">
                ${album.title}
            </a>
        </p>
        `);
    }
    res.render('albums', {
        locals: {
            theAlbums: albumsList.join('')
        },
        partials
    });
});

// :albumId is a *placeholder*
// can't match the following:
// ? & = % /
app.get('/albums/:albumId', (req, res) => {
    // Express puts your
    // res.send(`You want: ${req.params.albumId}`);
    try {
        const { albumId } = req.params; // pluck out the value and create 
                                        // variable with the same name

        const songsArray = albums.getSongsForAlbum(albumId);
        const theAlbum = albums.getById(albumId);
        // res.json(songsArray);
        // const songsString = '';
        const songsList = [];
        for (let song of songsArray) {
            // songsString += `
            //     <p>${song.title}</p>
            // `;
            songsList.push(`
                <p>${song.title}</p>
            `);
        }
        res.render('songs', {
            locals: {
                albumName: theAlbum.title,
                listOfSongs: songsList.join('')
            },
            partials
        })

    } catch (e) {
        console.log(e);
        console.log('================');
        res.status(404).send('Sorry! We could not find that one. Please pay us more money.');
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