//Variables
const botones = document.querySelector("#buttons");
const pantalla = document.querySelector("#image");
const titulo = document.querySelector("#title");
const parrafo = document.querySelector("#paragraph");

//Funcion y evento
botones.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);

  flores.forEach((flor) => {
    if (flor.idflor == e.target.innerHTML) {
      pantalla.src = flor.imagen;
      titulo.textContent = flor.titulo;
      parrafo.textContent = flor.descripcion;
    }
  });
});
