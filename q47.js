"use strict";
//q 45 create car object with  flexible properties
Object.defineProperty(exports, "__esModule", { value: true });
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car = value);
    return car;
}
console.log(make_car("Toyota", "corolla ", ["color", "red"], ["year ", 2020]));
console.log(make_car("ford", "fiesta", ["color", "blue"], ["sunroof", true]));
