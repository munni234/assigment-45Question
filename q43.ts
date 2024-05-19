//add the great to magicians names


let magicians:string[] = ['Alice','David','chris'];
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }
}
console.log(magicians);
make_great(magicians);






