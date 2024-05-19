//q no43 preserve the original magicians names while creatig a new great list 

function show_magicians(magicians: string[]) {
    magicians.forEach(magicians => {
        console.log(magicians);
    }

    );
}
function make_greats(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }

    make_great(magicians);
    show_magicians(magicians)
}

let magicians: string[] = ['Alice','David','Chris'];

function make_great(magicians: string[]): string[] {
let  greatMagicians:any  = [];
magicians.forEach(magicians => {
    greatMagicians.push(`${magicians} the great`);
});

console.log(greatMagicians);
return greatMagicians

} 

let greatMagicians = make_great(magicians.slice());
show_magicians(magicians)
console.log(magicians);




