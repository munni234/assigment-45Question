//seeing the world:Think of at least five places you,d like to visit

let places: string[] = ['germany','Turkey','Japan','Dubai','saudia Arabia','Egypt'];

console.log('Original order:', places);
console.log('Alphabetical order:' ,[...places].sort());

console.log('Original order:' ,places);

console.log('Reverse Alphabetical order:' , [...places].sort().reverse());

console.log('Original order :', places);

places.reverse();
console.log('Reversed order:', places);

places.sort();
console.log('Alphabetical order:', places);

let n = places.indexOf('japan');
console.log(n);

