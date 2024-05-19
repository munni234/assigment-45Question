"use strict";
//formating city country pairs.
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("karachi");
describe_city("lahore");
describe_city("Tokyo", "japan");
