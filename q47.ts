//q 45 create car object with  flexible properties

function make_car(manufacturer: string, model: string,  ...options: [string, any][]): object {
    let car =  {manufacturer, model   } ; 
    options.forEach(([key, value]) => car = value);

   return car;
} 
console.log(make_car("Toyota", "corolla ", ["color" , "red"] , ["year ", 2020]));

console.log(make_car("ford", "fiesta", ["color","blue"], ["sunroof", true]));



