"use strict";
//create ojbects for music albums
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, tittle, tracks) {
    let album = { artist, tittle, tracks };
    if (tracks) {
        album[`tracks`] = tracks;
    }
    return album;
}
console.log(make_album, (typeof make_album));
console.log(make_album("Artist one", "The second Album"));
console.log(make_album("Artist one", "The third Album", 12));
