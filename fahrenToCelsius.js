console.log('--::Fahrenheit to Celsius Convertion::--');

function fahrenToCelsius(fahrehheit){
    let celsius = 5/9 * (fahrehheit - 32);
    return celsius;
}

const celsiusTem = 53.6;
const fahren = fahrenToCelsius(celsiusTem);
console.log(fahren);