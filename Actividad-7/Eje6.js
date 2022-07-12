let CelstoFahr = (Celsius) => (Celsius * 9) / 5 + 32;
let FahrtoCels = (Fahrenheit) => ((Fahrenheit - 32) * 5) / 9;

console.log(`Fahrenheit: ${CelstoFahr(10)}°F`);
console.log(`Celsius: ${FahrtoCels(10)}°C`);
