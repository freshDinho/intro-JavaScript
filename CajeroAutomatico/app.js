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

// var cuentas = [
//   { nombre: "Mali", password: 1234, saldo: 200 },
//   { nombre: "Gera", password: 4321, saldo: 290 },
//   { nombre: "Maui", password: 0000, saldo: 67 },
// ];

const cuentas = [
  { nombre: "Mali", password: 1234 },
  { nombre: "Gera", password: 4321 },
  { nombre: "Maui", password: 0000 },
];

//SUBIR AL STORAGE
// for (let i = 0; i < cuentas.length; i++) {
//   localStorage.setItem(cuentas[i].nombre, cuentas[i].saldo);
// }

console.log(window.localStorage);
function desaparecer_Botones() {
  retiro.disabled = true;
  deposito.disabled = true;
  consultar.disabled = true;
  cerrarSesion.disabled = true;

  retiro.style.visibility = "hidden";
  deposito.style.visibility = "hidden";
  consultar.style.visibility = "hidden";
  cerrarSesion.style.visibility = "hidden";
}
function aparecer_Botones() {
  retiro.disabled = false;
  deposito.disabled = false;
  consultar.disabled = false;
  cerrarSesion.disabled = false;

  retiro.style.visibility = "visible";
  deposito.style.visibility = "visible";
  consultar.style.visibility = "visible";
  cerrarSesion.style.visibility = "visible";
}

function pantalla_Bienvenida(persona, saldo) {
  pantalla1.style.color = "white";
  pantalla2.style.color = "white";
  pantalla3.style.color = "red";
  pantalla4.style.color = "white";
  pantalla5.style.color = "white";
  pantalla6.style.color = "white";
  pantalla7.style.color = "white";
  pantalla8.style.color = "white";
  pantalla9.style.color = "white";

  pantalla1.style.fontSize = "15px";
  pantalla2.style.fontSize = "15px";
  pantalla3.style.fontSize = "50px";
  pantalla4.style.fontSize = "30px";
  pantalla5.style.fontSize = "20px";
  pantalla6.style.fontSize = "15px";
  pantalla7.style.fontSize = "15px";
  pantalla8.style.fontSize = "15px";
  pantalla9.style.fontSize = "15px";

  pantalla1.textContent = "\u2003";
  // "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
  pantalla2.textContent = "\u2003";
  pantalla3.textContent = "Bienvenido!" + " " + cuentas[persona].nombre;
  pantalla4.textContent = "¿Que quieres hacer?";
  pantalla5.textContent = "selecciona alguna de las opciones en pantalla";
  pantalla6.textContent = "\u2003";
  pantalla7.textContent = "\u2003";
  pantalla8.textContent = "\u2003";
  pantalla9.textContent = "\u2003";
}

function Intentar_De_Nuevo() {
  pantalla7.style.color = "red";
  pantalla7.textContent = "Intentar de nuevo";
}

function pantallaIniciarSesion() {
  pantalla1.style.color = "white";
  pantalla2.style.color = "white";
  pantalla3.style.color = "red";
  pantalla4.style.color = "white";
  pantalla5.style.color = "white";
  pantalla6.style.color = "white";
  pantalla7.style.color = "white";
  pantalla8.style.color = "white";
  pantalla9.style.color = "white";

  pantalla1.style.fontSize = "15px";
  pantalla2.style.fontSize = "15px";
  pantalla3.style.fontSize = "50px";
  pantalla4.style.fontSize = "15px";
  pantalla5.style.fontSize = "15px";
  pantalla6.style.fontSize = "19px";
  pantalla7.style.fontSize = "15px";
  pantalla8.style.fontSize = "15px";
  pantalla9.style.fontSize = "15px";

  pantalla1.textContent = "\u2003";
  // "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
  pantalla2.textContent = "\u2003";
  pantalla3.textContent = "Iniciar Sesion";
  pantalla4.textContent = "";
  pantalla4.insertAdjacentHTML(
    "beforeend",
    '<input type="text" placeholder="username" id="username" style="width: 180px; height: 40px;">'
  );
  pantalla5.textContent = "";
  pantalla5.insertAdjacentHTML(
    "beforeend",
    '<input type="password" placeholder="password" id="password" style="width: 180px; height: 40px;">'
  );
  pantalla6.textContent = "";
  pantalla6.insertAdjacentHTML(
    "beforeend",
    '<button id="btnIniciarSesion2" class="col-3 mb-3 btn text-center" style="width: 180px; height: 40px; font-size: 19px;">Iniciar sesion</button>'
  );
  pantalla7.textContent = "\u2003";
  pantalla8.textContent = "\u2003";
  pantalla9.textContent = "\u2003";
}

function PantallaConsultar(persona, saldo) {
  pantalla1.style.color = "white";
  pantalla2.style.color = "white";
  pantalla3.style.color = "white";
  pantalla4.style.color = "yellow";
  pantalla5.style.color = "white";
  pantalla6.style.color = "white";
  pantalla7.style.color = "white";
  pantalla8.style.color = "white";
  pantalla9.style.color = "white";

  pantalla1.style.fontSize = "15px";
  pantalla2.style.fontSize = "15px";
  pantalla3.style.fontSize = "15px";
  pantalla4.style.fontSize = "30px";
  pantalla5.style.fontSize = "15px";
  pantalla6.style.fontSize = "15px";
  pantalla7.style.fontSize = "15px";
  pantalla8.style.fontSize = "15px";
  pantalla9.style.fontSize = "15px";

  pantalla1.textContent = "\u2003";
  // "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
  pantalla3.textContent = "\u2003";
  pantalla2.textContent = "\u2003";
  pantalla4.textContent = "Tu saldo actual es de: " + "$" + saldo;
  pantalla5.textContent = "\u2003";
  pantalla6.textContent = "\u2003";
  pantalla7.textContent = "\u2003";
  pantalla8.textContent = "";
  pantalla8.insertAdjacentHTML(
    "beforeend",
    '<button id="btn-regresar" class="btn d-flex">Regresar</button>'
  );
  pantalla9.textContent = "\u2003";
}

function pantalla_depositar(persona, saldo) {
  pantalla1.style.color = "white";
  pantalla2.style.color = "white";
  pantalla3.style.color = "white";
  pantalla4.style.color = "red";
  pantalla5.style.color = "white";
  pantalla6.style.color = "white";
  pantalla7.style.color = "white";
  pantalla8.style.color = "white";
  pantalla9.style.color = "white";

  pantalla1.style.fontSize = "15px";
  pantalla2.style.fontSize = "15px";
  pantalla3.style.fontSize = "15px";
  pantalla4.style.fontSize = "30px";
  pantalla5.style.fontSize = "20px";
  pantalla6.style.fontSize = "15px";
  pantalla7.style.fontSize = "15px";
  pantalla8.style.fontSize = "15px";
  pantalla9.style.fontSize = "15px";

  // let input = document.createElement("input");
  pantalla1.textContent = "\u2003";
  // "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
  pantalla2.textContent = "\u2003";
  pantalla3.textContent = "\u2003";
  pantalla4.textContent = "Cantidad a depositar: ";
  pantalla5.textContent = "$ ";
  pantalla5.insertAdjacentHTML(
    "beforeend",
    '<input id="input" type="text" style="width: 80px;">'
  );
  pantalla6.textContent = "\u2003";
  pantalla6.insertAdjacentHTML(
    "beforeend",
    '<button id="btn-deposito" class="btn">Depositar</button>'
  );
  pantalla7.textContent = "\u2003";
  pantalla8.textContent = "";
  pantalla8.insertAdjacentHTML(
    "beforeend",
    '<button id="btn-regresar" class="btn d-flex">Regresar</button>'
  );
  pantalla9.textContent = "\u2003";
}

function pantalla_TransferenciaFallida(persona, saldo) {
  pantalla1.style.color = "white";
  pantalla2.style.color = "white";
  pantalla3.style.color = "white";
  pantalla4.style.color = "red";
  pantalla5.style.color = "white";
  pantalla6.style.color = "yellow";
  pantalla7.style.color = "white";
  pantalla8.style.color = "white";
  pantalla9.style.color = "white";

  pantalla1.style.fontSize = "15px";
  pantalla2.style.fontSize = "15px";
  pantalla3.style.fontSize = "15px";
  pantalla4.style.fontSize = "50px";
  pantalla5.style.fontSize = "20px";
  pantalla6.style.fontSize = "20px";
  pantalla7.style.fontSize = "15px";
  pantalla8.style.fontSize = "15px";
  pantalla9.style.fontSize = "15px";

  pantalla1.textContent = "\u2003";
  // "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
  pantalla3.textContent = "\u2003";
  pantalla2.textContent = "\u2003";
  pantalla4.textContent = "Transferencia fallida!";
  pantalla5.textContent = "La cuenta ya alcanzo su limite de saldo";
  pantalla6.textContent = "Saldo Total: " + "$" + saldo;
  pantalla7.textContent = "\u2003";
  pantalla8.textContent = "";
  pantalla8.insertAdjacentHTML(
    "beforeend",
    '<button id="btn-regresar" class="btn d-flex">Regresar</button>'
  );
  pantalla9.textContent = "\u2003";
}

function pantalla_TranferenciaExitosa(persona, saldo, deposito) {
  pantalla1.style.color = "white";
  pantalla2.style.color = "white";
  pantalla3.style.color = "white";
  pantalla4.style.color = "green";
  pantalla5.style.color = "white";
  pantalla6.style.color = "yellow";
  pantalla7.style.color = "white";
  pantalla8.style.color = "white";
  pantalla9.style.color = "white";

  pantalla1.style.fontSize = "15px";
  pantalla2.style.fontSize = "15px";
  pantalla3.style.fontSize = "15px";
  pantalla4.style.fontSize = "50px";
  pantalla5.style.fontSize = "20px";
  pantalla6.style.fontSize = "20px";
  pantalla7.style.fontSize = "15px";
  pantalla8.style.fontSize = "15px";
  pantalla9.style.fontSize = "15px";

  pantalla1.textContent = "\u2003";
  // "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
  pantalla3.textContent = "\u2003";
  pantalla2.textContent = "\u2003";
  pantalla4.textContent = "Transferencia exitosa!";
  pantalla5.textContent = "Monto ingresado: " + "$" + deposito;
  pantalla6.textContent = "Nuevo Saldo Total: " + "$" + saldo;
  pantalla7.textContent = "\u2003";
  pantalla8.textContent = "";
  pantalla8.insertAdjacentHTML(
    "beforeend",
    '<button id="btn-regresar" class="btn d-flex">Regresar</button>'
  );
  pantalla9.textContent = "\u2003";
}

function pantalla_Retirar(persona, saldo) {
  pantalla1.style.color = "white";
  pantalla2.style.color = "white";
  pantalla3.style.color = "white";
  pantalla4.style.color = "red";
  pantalla5.style.color = "white";
  pantalla6.style.color = "white";
  pantalla7.style.color = "white";
  pantalla8.style.color = "white";
  pantalla9.style.color = "white";

  pantalla1.style.fontSize = "15px";
  pantalla2.style.fontSize = "15px";
  pantalla3.style.fontSize = "15px";
  pantalla4.style.fontSize = "30px";
  pantalla5.style.fontSize = "20px";
  pantalla6.style.fontSize = "15px";
  pantalla7.style.fontSize = "15px";
  pantalla8.style.fontSize = "15px";
  pantalla9.style.fontSize = "15px";

  pantalla1.textContent = "\u2003";
  // "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
  pantalla2.textContent = "\u2003";
  pantalla3.textContent = "\u2003";
  pantalla4.textContent = "Cantidad a retirar: ";
  pantalla5.textContent = "$ ";
  pantalla5.insertAdjacentHTML(
    "beforeend",
    '<input id="input" type="text" style="width: 80px;">'
  );
  pantalla6.textContent = "\u2003";
  pantalla6.insertAdjacentHTML(
    "beforeend",
    '<button id="btn-retiro" class="btn">Retirar</button>'
  );
  pantalla7.textContent = "\u2003";
  pantalla8.textContent = "";
  pantalla8.insertAdjacentHTML(
    "beforeend",
    '<button id="btn-regresar" class="btn d-flex">Regresar</button>'
  );
  pantalla9.textContent = "\u2003";
}

function pantalla_retiroFallido(persona, saldo) {
  pantalla1.style.color = "white";
  pantalla2.style.color = "white";
  pantalla3.style.color = "white";
  pantalla4.style.color = "red";
  pantalla5.style.color = "white";
  pantalla6.style.color = "yellow";
  pantalla7.style.color = "white";
  pantalla8.style.color = "white";
  pantalla9.style.color = "white";

  pantalla1.style.fontSize = "15px";
  pantalla2.style.fontSize = "15px";
  pantalla3.style.fontSize = "15px";
  pantalla4.style.fontSize = "50px";
  pantalla5.style.fontSize = "20px";
  pantalla6.style.fontSize = "20px";
  pantalla7.style.fontSize = "15px";
  pantalla8.style.fontSize = "15px";
  pantalla9.style.fontSize = "15px";

  pantalla1.textContent = "\u2003";
  // "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
  pantalla3.textContent = "\u2003";
  pantalla2.textContent = "\u2003";
  pantalla4.textContent = "Retiro fallido!";
  pantalla5.textContent =
    "Tu cuenta no cuenta con el saldo suficiente para retirar";
  pantalla6.textContent = "Saldo: " + "$" + saldo;
  pantalla7.textContent = "\u2003";
  pantalla8.textContent = "";
  pantalla8.insertAdjacentHTML(
    "beforeend",
    '<button id="btn-regresar" class="btn d-flex">Regresar</button>'
  );
  pantalla9.textContent = "\u2003";
}

function pantalla_retiroExitoso(persona, saldo, retiro) {
  pantalla1.style.color = "white";
  pantalla2.style.color = "white";
  pantalla3.style.color = "white";
  pantalla4.style.color = "green";
  pantalla5.style.color = "white";
  pantalla6.style.color = "yellow";
  pantalla7.style.color = "white";
  pantalla8.style.color = "white";
  pantalla9.style.color = "white";

  pantalla1.style.fontSize = "15px";
  pantalla2.style.fontSize = "15px";
  pantalla3.style.fontSize = "15px";
  pantalla4.style.fontSize = "50px";
  pantalla5.style.fontSize = "20px";
  pantalla6.style.fontSize = "20px";
  pantalla7.style.fontSize = "15px";
  pantalla8.style.fontSize = "15px";
  pantalla9.style.fontSize = "15px";

  pantalla1.textContent = "\u2003";
  // "CuentaActual: " + cuentas[persona].nombre + " " + "Saldo: " + saldo;
  pantalla2.textContent = "\u2003";
  pantalla3.textContent = "\u2003";
  pantalla4.textContent = "Retiro exitoso!";
  pantalla5.textContent = "Monto retirado: " + retiro;
  pantalla6.textContent = "Nuevo Saldo Total: " + "$" + saldo;
  pantalla7.textContent = "\u2003";
  pantalla8.textContent = "";
  pantalla8.insertAdjacentHTML(
    "beforeend",
    '<button id="btn-regresar" class="btn d-flex">Regresar</button>'
  );
  pantalla9.textContent = "\u2003";
}

let persona = 0;
let saldoDecimal = 0;
let saldo = 0;

desaparecer_Botones();

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

        aparecer_Botones();

        persona = i;
        saldo = Number(localStorage.getItem(cuentas[persona].nombre));
        console.log("Persona: " + persona);
        console.log("SaldoDentro: " + saldo);
        pantalla_Bienvenida(persona, saldo);
        break;
      } else {
        // pantalla7.style.color = "white";
        Intentar_De_Nuevo();
      }
    } else {
      Intentar_De_Nuevo();
    }
  }
  console.log("Persona: " + persona);
  console.log("SaldoDentro: " + saldo);
});

cerrarSesion.addEventListener("click", function () {
  // window.location.reload();
  persona = undefined;
  desaparecer_Botones();
  pantallaIniciarSesion();
  let btnIniciarSesion = document.getElementById("btnIniciarSesion2");

  btnIniciarSesion.addEventListener("click", function () {
    console.log("si funciono");
    for (let i = 0; i < cuentas.length; i++) {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;

      if (username == cuentas[i].nombre) {
        if (password == cuentas[i].password) {
          console.log(
            "Datos-Persona: " + cuentas[i].nombre + " " + cuentas[i].password
          );
          aparecer_Botones();

          persona = i;
          saldo = Number(localStorage.getItem(cuentas[persona].nombre));
          console.log("Persona: " + persona);
          console.log("SaldoDentro: " + saldo);
          pantalla_Bienvenida(persona, saldo);
          break;
        } else {
          // pantalla7.style.color = "white";
          Intentar_De_Nuevo();
        }
      } else {
        Intentar_De_Nuevo();
      }
    }
  });
});

consultar.addEventListener("click", function () {
  // console.log("Persona: " + persona);
  desaparecer_Botones();
  PantallaConsultar(persona, saldo);

  let btnRegresar = document.getElementById("btn-regresar");

  btnRegresar.addEventListener("click", function () {
    aparecer_Botones();
    pantalla_Bienvenida(persona, saldo);
  });
});

deposito.addEventListener("click", function () {
  desaparecer_Botones();
  pantalla_depositar(persona, saldo);

  let btnRegresar = document.getElementById("btn-regresar");

  btnRegresar.addEventListener("click", function () {
    aparecer_Botones();
    pantalla_Bienvenida(persona, saldo);
  });

  let btnDeposito = document.getElementById("btn-deposito");
  let input = document.getElementById("input");
  let deposito = 0;
  let saldoTotal = 0;

  btnDeposito.addEventListener("click", function () {
    // console.log(isNaN(input.value));
    if (isNaN(input.value) == true) {
      Intentar_De_Nuevo();
      input.value = "";
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

      if (deposito == 0) {
        Intentar_De_Nuevo();
        input.value = "";
      } else {
        // console.log(
        //   "Cantidad depositada: " + cantidad + "typeof: " + typeof cantidad
        // );

        saldoTotal = saldo + deposito; //Usar getItem(keyname) aqui
        console.log("SaldoActual: " + saldo);
        if (saldoTotal > 990) {
          pantalla_TransferenciaFallida(persona, saldo);

          let btnRegresar = document.getElementById("btn-regresar");

          btnRegresar.addEventListener("click", function () {
            aparecer_Botones();
            pantalla_Bienvenida(persona, saldo);
          });
        } else {
          localStorage.setItem(cuentas[persona].nombre, saldoTotal); //keyname , keyvalue
          saldo = saldoTotal;
          console.log("SaldoActual: " + saldo);
          pantalla_TranferenciaExitosa(persona, saldo, deposito);

          let btnRegresar = document.getElementById("btn-regresar");

          btnRegresar.addEventListener("click", function () {
            aparecer_Botones();
            pantalla_Bienvenida(persona, saldo);
          });
        }
      }
    }
  });
});

retiro.addEventListener("click", function () {
  desaparecer_Botones();
  pantalla_Retirar(persona, saldo);
  let btnRegresar = document.getElementById("btn-regresar");

  btnRegresar.addEventListener("click", function () {
    aparecer_Botones();
    pantalla_Bienvenida(persona, saldo);
  });

  let btnRetiro = document.getElementById("btn-retiro");
  let input = document.getElementById("input");
  let retiro = 0;
  let saldoTotal = 0;

  btnRetiro.addEventListener("click", function () {
    // console.log(isNaN(input.value));
    if (isNaN(input.value) == true) {
      Intentar_De_Nuevo();
      input.value = "";
      // console.log("Es String");
    } else {
      // console.log("Es Numero");
      // console.log(
      //   "SaldoAnterior: " +
      //     cuentas[persona].saldo +
      //     "typeof: " +
      //     typeof cuentas[persona].saldo
      // );
      retiro = Number(input.value);
      //Solucion al ingresar cero en el input
      if (retiro == 0) {
        Intentar_De_Nuevo();
        input.value = "";
      } else {
        // console.log(
        //   "Cantidad depositada: " + cantidad + "typeof: " + typeof cantidad
        // );

        saldoTotal = saldo - retiro; //Usar getItem(keyname) aqui
        console.log("SaldoActual: " + saldo);

        if (saldoTotal < 10) {
          pantalla_retiroFallido(persona, saldo);

          let btnRegresar = document.getElementById("btn-regresar");

          btnRegresar.addEventListener("click", function () {
            aparecer_Botones();
            pantalla_Bienvenida(persona, saldo);
          });
        } else {
          localStorage.setItem(cuentas[persona].nombre, saldoTotal); //keyname , keyvalue
          saldo = saldoTotal;
          pantalla_retiroExitoso(persona, saldo, retiro);

          let btnRegresar = document.getElementById("btn-regresar");

          btnRegresar.addEventListener("click", function () {
            aparecer_Botones();
            pantalla_Bienvenida(persona, saldo);
          });
        }
      }
    }
  });
});
