"use strict";
//case sensitive 
//Equality with string
console.log('apple' == 'apple');
console.log('apple' == 'Apple');
console.log('hy how are u' == 'hy how are u');
console.log('Hy how are u' == 'hy how are u');
//using the lower case function 
console.log('Testing with lower case');
console.log('Apple'.toLowerCase() == 'apple');
//numerical tests 
console.log("numerical test");
console.log(10 > 5);
console.log(4 < 3);
//test using and or operators
console.log("tests using 'and' and 'or':");
console.log(true && false);
console.log(true || false);
//test whether an item is in  array
let fruits = ['apple', 'banana', 'mango'];
console.log("is 'apple' in fruits?");
console.log(fruits.includes('apple'));
//test whether an item is not in an array
console.log("is 'mango' not in fruits?");
console.log(!fruits.includes("mango"));
