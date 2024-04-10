"use strict";
// crating a function for customizing t-shrits.
Object.defineProperty(exports, "__esModule", { value: true });
function shrits(size = "large", message = "I love shirts of black color") {
    console.log(`Making a ${size} t-shirts with the message "${message} printed on it."`);
}
shrits();
shrits("medium");
shrits("small", "Dive into coding");
