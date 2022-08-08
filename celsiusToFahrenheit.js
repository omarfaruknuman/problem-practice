console.log('--::Converting Temperature celsius to fahrehheit::--');
function celsiusToFahreh(celsius){
    let fahrehheit = (1.8 * celsius) + 32;
    return fahrehheit;
    console.log(fahrehheit);
}

const temperature = 12;
const fahren = celsiusToFahreh(temperature);
console.log(fahren);
