"use strict";
//summarize sandwich orders with varying ingrediants 
Object.defineProperty(exports, "__esModule", { value: true });
function make_sandwich(...items) {
    console.log(`Making a sandwich: ${items.join(', ')}.`);
}
make_sandwich("ham", "tomato");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avacoda", "sprouts", "musrard", "mayo");
