const data = require('./albumsData.json');

function getAlbums() {
    return data.albums;
}

function getSongsForAlbum(albumId) {
    // return data.albums.find(album => album.id == albumId).songs;
    const theAlbum = data.albums.find((anAlbum) => {
        // Is the album I'm currently visiting
        // the one we want?
        // if (anAlbum.id == albumId) {
        //     // (I need to return true or false.)
        //     return true;
        // } else {
        //     return false;
        // }
        return anAlbum.id == albumId;
    });
    console.log('****************');
    console.log(theAlbum);
    console.log('****************');
    if (theAlbum) {
        return theAlbum.songs;
    } else {
        throw "Album not found";
    }
    
}

module.exports = {
    getAlbums,
    getSongsForAlbum
};