"use strict";
//q no43 preserve the original magicians names while creatig a new great list 
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
function make_greats(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }
    make_great(magicians);
    show_magicians(magicians);
}
let magicians = ['Alice', 'David', 'Chris'];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magicians => {
        greatMagicians.push(`${magicians} the great`);
    });
    console.log(greatMagicians);
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice());
show_magicians(magicians);
console.log(magicians);
