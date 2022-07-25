let pantalla1 = document.getElementById("Pantalla1");
let pantalla2 = document.getElementById("Pantalla2");
let pantalla3 = document.getElementById("Pantalla3");
let pantalla4 = document.getElementById("Pantalla4");
let pantalla5 = document.getElementById("Pantalla5");
let pantalla6 = document.getElementById("Pantalla6");
let pantalla7 = document.getElementById("Pantalla7");
let pantalla8 = document.getElementById("Pantalla8");
let pantalla9 = document.getElementById("Pantalla9");
let retiro = document.getElementById("retiro");
let deposito = document.getElementById("deposito");
let consulta = document.getElementById("consulta");
let btnBorrar = document.getElementById("BorrarLocalStorage");
let iniciarSesion = document.getElementById("iniciar-sesion");

var cuentas = [
  { nombre: "Mali", password: 1234, saldo: 200 },
  { nombre: "Gera", password: 4321, saldo: 290 },
  { nombre: "Maui", password: 0000, saldo: 67 },
];

for (let i = 0; i < cuentas.length; i++) {
  localStorage.setItem(cuentas[i].nombre, cuentas[i].saldo);
}

iniciarSesion.addEventListener("click", function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(username, password);
  for (let i = 0; i < cuentas.length; i++) {
    console.log(
      "Usuario:" + cuentas[i].nombre + "password:" + cuentas[i].password
    );

    if (username == cuentas[i].nombre) {
      if (password == cuentas[i].password) {
        retiro.textContent = "Retiro";
        pantalla1.textContent = "";
        pantalla2.textContent = "";
        pantalla3.textContent = "";
        pantalla4.textContent = "";
        pantalla5.textContent =
          "Bienvenido!" + " " + username + " " + "saldo: " + cuentas[i].saldo;
        pantalla6.textContent = "";
        pantalla7.textContent = "";
        pantalla8.textContent = "";
        pantalla9.textContent = "";
        pantalla7.style.color = "white";
        break;
      } else {
        // pantalla7.style.color = "white";
        pantalla7.textContent = "Usuario o Contraseña incorrecta";
        console.log("No es la contraseña");
      }
    } else {
      pantalla7.style.color = "red";
      pantalla7.textContent = "Usuario o Contraseña incorrecta";
      console.log("No es el usario");
    }
  }
});

btnBorrar.addEventListener("click", function () {
  localStorage.clear();
});
