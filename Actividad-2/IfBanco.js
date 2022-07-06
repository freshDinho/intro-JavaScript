let cliente = "";
let cantDinero = 150000;

if (cantDinero >= 100000) {
  cliente = "Platinum";
  console.log(cliente);
} else if (cantDinero >= 50000) {
  cliente = "Gold";
  console.log(cliente);
} else if (cantDinero >= 10000) {
  cliente = "Standard";
  console.log(cliente);
} else {
  cliente = "No eres cliente";
  console.log(cliente);
}
