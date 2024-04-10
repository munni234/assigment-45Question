"use strict";
//seeing the world:Think of at least five places you,d like to visit
Object.defineProperty(exports, "__esModule", { value: true });
let places = ['germany', 'Turkey', 'Japan', 'Dubai', 'saudia Arabia', 'Egypt'];
console.log('Original order:', places);
console.log('Alphabetical order:', [...places].sort());
console.log('Original order:', places);
console.log('Reverse Alphabetical order:', [...places].sort().reverse());
console.log('Original order :', places);
places.reverse();
console.log('Reversed order:', places);
places.sort();
console.log('Alphabetical order:', places);
let n = places.indexOf('japan');
console.log(n);
