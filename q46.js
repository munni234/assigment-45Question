"use strict";
// q 46 construct an object for a laptop including properties make, modal ,year and a method describe  that logs a sentence about laptop.
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: "dell",
    model: "xps 15",
    year: 2021,
    describe: function () {
        console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
