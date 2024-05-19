"use strict";
//add the great to magicians names
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Alice', 'David', 'chris'];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }
}
console.log(magicians);
make_great(magicians);
