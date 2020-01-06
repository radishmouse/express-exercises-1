const data = require('./albumsData.json');

function getAlbums() {
    return data.albums;
}

function getSongsForAlbum(albumId) {
    return data.albums.find(album => album.id == albumId).songs;
}

module.exports = {
    getAlbums,
    getSongsForAlbum
};