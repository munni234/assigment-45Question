"use strict";
//formatting city country pairs 
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("lahore", "pakistan"));
console.log(city_country("Tokyo", "japan"));
console.log(city_country("paris", "France"));
