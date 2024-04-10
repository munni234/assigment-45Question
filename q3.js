"use strict";
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let newName = 'faiza mushtaq';
console.log(newName.toLowerCase());
console.log(newName.toUpperCase());
console.log(newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase());
