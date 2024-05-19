//summarize sandwich orders with varying ingrediants 


function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich: ${items.join(', ')}.`);


}

make_sandwich("ham", "tomato");    
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avacoda","sprouts","musrard","mayo");