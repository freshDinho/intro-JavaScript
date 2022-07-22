const input = [12, 46, 32, 64];

const initialValue = 0;
const sumWithInitial = input.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

let media = sumWithInitial / input.length; //38.5
input.sort((a, b) => a - b); //[ 12, 32, 46, 64 ]
