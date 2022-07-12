function CelstoFahr(Celsius) {
  let calc = (Celsius * 9) / 5 + 32;
  return calc;
}

function FahrtoCels(Fahrenheit) {
  let calc = ((Fahrenheit - 32) * 5) / 9;
  return calc;
}

console.log(`Fahrenheit: ${CelstoFahr(10)}`);
console.log(`Celsius: ${FahrtoCels(49)}`);
