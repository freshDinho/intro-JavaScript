let TotalDatos = 100;
let limiteInicial = Number(prompt("Dame un limite Inicial:", "17")); //17
let limiteFinal = Number(prompt("Dame un limite Final:", "27")); //27
let sumLimites = limiteFinal - limiteInicial; // debe de dar 10 para que el usario no se pase de los 10 datos

if (sumLimites == 10) {
  for (let i = 1; i <= TotalDatos; i++) {
    // mientras i se mantiene en el rango
    if (i >= limiteInicial && i <= limiteFinal) {
      console.log("Eliminado:" + i);
      continue;
    }
    console.log(i);
  }
} else {
  console.log(
    "Te faltaron datos para completar los 10 datos o Te pasaste de los 10 datos "
  );
}
