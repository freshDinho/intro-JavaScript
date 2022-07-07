let jugador1, jugador2;

jugador1 = prompt("Elije piedra,papel o Tijera" + jugador1);
jugador2 = prompt("Elije piedra,papel o Tijera" + jugador2);

if (jugador1 == jugador2) {
  console.log("Empate!");
} else {
  //if-piedra
  if (jugador1 == "piedra" && jugador2 == "papel") {
    console.log("Ganador: jugador1 ");
  } else if (jugador1 == "piedra" && jugador2 == "tijera") {
    console.log("Ganador: jugador1 ");
  }
  //if-papel
  if (jugador1 == "papel" && jugador2 == "piedra") {
    console.log("Ganador: jugador2");
  } else if (jugador1 == "papel" && jugador2 == "tijera") {
    console.log("Ganador: jugador2");
  }
  //if-tijera
  if (jugador1 == "tijera" && jugador2 == "papel") {
    console.log("Ganador: jugador1");
  } else if (jugador1 == "tijera" && jugador2 == "piedra") {
    console.log("Ganador: jugador2");
  }
}
