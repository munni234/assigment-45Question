//create ojbects for music albums

function make_album(artist: string, tittle: String, tracks?:number ) {
    let album = { artist, tittle , tracks };
if (tracks) {
    album[`tracks`] = tracks;
}

return album;


}

console.log(make_album,(typeof make_album));
console.log(make_album("Artist one", "The second Album"));
console.log(make_album("Artist one", "The third Album", 12));



