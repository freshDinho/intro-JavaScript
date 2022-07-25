let pantalla1 = document.getElementById("Pantalla1");
let pantalla2 = document.getElementById("Pantalla2");
let pantalla3 = document.getElementById("Pantalla3");
let pantalla4 = document.getElementById("Pantalla4");
let pantalla5 = document.getElementById("Pantalla5");
let pantalla6 = document.getElementById("Pantalla6");
let pantalla7 = document.getElementById("Pantalla7");
let pantalla8 = document.getElementById("Pantalla8");
let pantalla9 = document.getElementById("Pantalla9");
let AgregarElementos = document.getElementById("Agregar-Elementos");

let retiro = document.getElementById("retiro");
let deposito = document.getElementById("deposito");
let consultar = document.getElementById("consultar");
let iniciarSesion = document.getElementById("iniciar-sesion");
let cerrarSesion = document.getElementById("cerrarSesion");

let btnBorrar = document.getElementById("BorrarLocalStorage");

// var cuentas = [
//   { nombre: "Mali", password: 1234, saldo: 200 },
//   { nombre: "Gera", password: 4321, saldo: 290 },
//   { nombre: "Maui", password: 0000, saldo: 67 },
// ];

var cuentas = [
  { nombre: "Mali", password: 1234 },
  { nombre: "Gera", password: 4321 },
  { nombre: "Maui", password: 0000 },
];

//SUBIR AL STORAGE
// for (let i = 0; i < cuentas.length; i++) {
//   localStorage.setItem(cuentas[i].nombre, cuentas[i].saldo);
// }

console.log(window.localStorage);

let persona = 0;
let saldo = 0;

iniciarSesion.addEventListener("click", function () {
  // console.log(username, password);

  for (let i = 0; i < cuentas.length; i++) {
    // console.log(
    //   "Usuario:" +
    //     cuentas[persona].nombre +
    //     "password:" +
    //     cuentas[persona].password
    // );
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == cuentas[i].nombre) {
      if (password == cuentas[i].password) {
        console.log(
          "Datos-Persona: " + cuentas[i].nombre + " " + cuentas[i].password
        );

        persona = i;
        saldo = Number(localStorage.getItem(cuentas[persona].nombre));
        console.log("Persona: " + persona);
        console.log("SaldoDentro: " + saldo);

        cerrarSesion.textContent = "Cerrar Sesion";
        retiro.textContent = "Retiro";
        deposito.textContent = "Deposito";
        consultar.textContent = "Consultar";

        pantalla7.style.color = "white";

        pantalla1.style.fontSize = "50px";
        pantalla3.style.fontSize = "50px";
        pantalla5.style.fontSize = "15px";

        pantalla1.textContent = "Bienvenido!" + " " + username;
        pantalla2.textContent = "";
        pantalla3.textContent =
          "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
        pantalla4.textContent = "¿Que quieres hacer?";
        pantalla5.textContent = "selecciona alguna de las opciones en pantalla";
        pantalla6.textContent = "";
        pantalla7.textContent = "";
        pantalla8.textContent = "";
        pantalla9.textContent = "";

        break;
      } else {
        // pantalla7.style.color = "white";
        pantalla7.textContent = "Intentar de nuevo";
      }
    } else {
      pantalla7.style.color = "red";
      pantalla7.textContent = "Intentar de nuevo";
    }
  }
  console.log("Persona: " + persona);
  console.log("SaldoDentro: " + saldo);
});

consultar.addEventListener("click", function () {
  console.log("Persona: " + persona);
  pantalla3.style.fontSize = "30px";
  pantalla4.style.fontSize = "30px";
  pantalla4.style.color = "white";

  pantalla1.textContent = "\u2003";
  pantalla2.textContent = "\u2003";
  pantalla3.textContent =
    "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
  pantalla4.textContent = "Saldo Actual: " + saldo;
  pantalla5.textContent = "";
  pantalla6.textContent = "";
  pantalla7.textContent = "";
  pantalla8.textContent = "";
  pantalla9.textContent = "";
});

deposito.addEventListener("click", function () {
  pantalla3.style.fontSize = "30px";
  pantalla4.style.fontSize = "30px";

  // let input = document.createElement("input");
  pantalla1.textContent = "\u2003";
  pantalla2.textContent = "\u2003";
  pantalla3.textContent =
    "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
  pantalla4.textContent = "Cantidad a depositar: ";
  pantalla5.textContent = "";
  pantalla5.insertAdjacentHTML("beforeend", '<input id="input" type="text">');
  pantalla6.textContent = "";
  pantalla6.insertAdjacentHTML(
    "beforeend",
    '<button id="btn-deposito" class="btn btn-primary">Depositar</button>'
  );
  pantalla7.textContent = "";
  pantalla8.textContent = "";
  pantalla9.textContent = "";

  let btnDeposito = document.getElementById("btn-deposito");
  let input = document.getElementById("input");
  let deposito = 0;

  btnDeposito.addEventListener("click", function () {
    // console.log(isNaN(input.value));
    if (isNaN(input.value) == true) {
      pantalla7.style.color = "red";
      pantalla7.textContent = "Ingrese un numero valido";
      // console.log("Es String");
    } else {
      // console.log("Es Numero");
      // console.log(
      //   "SaldoAnterior: " +
      //     cuentas[persona].saldo +
      //     "typeof: " +
      //     typeof cuentas[persona].saldo
      // );
      deposito = Number(input.value);
      // console.log(
      //   "Cantidad depositada: " + cantidad + "typeof: " + typeof cantidad
      // );

      saldo = saldo + deposito; //Usar getItem(keyname) aqui
      console.log("SaldoActual: " + saldo);
      localStorage.setItem(cuentas[persona].nombre, saldo); //keyname , keyvalue

      pantalla4.style.color = "green";

      pantalla1.textContent = "\u2003";
      pantalla2.textContent = "\u2003";
      pantalla3.textContent =
        "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
      pantalla4.textContent = "Transferencia exitosa!";
      pantalla5.textContent = "Monto ingresado: " + deposito;
      pantalla6.textContent = "Nuevo Saldo Total: " + saldo;
      pantalla7.textContent = "";
      pantalla8.textContent = "";
      pantalla9.textContent = "";
    }
  });
  pantalla4.style.color = "white";
  pantalla7.style.color = "white";
});

btnBorrar.addEventListener("click", function () {
  localStorage.clear();
  pantalla1.textContent = "";
  pantalla2.textContent = "";
  pantalla3.textContent = "";
  pantalla4.textContent = "";
  pantalla5.textContent = "";
  pantalla6.textContent = "";
  pantalla7.textContent = "";
  pantalla8.textContent = "";
  pantalla9.textContent = "";
});

cerrarSesion.addEventListener("click", function () {
  window.location.reload();
});
