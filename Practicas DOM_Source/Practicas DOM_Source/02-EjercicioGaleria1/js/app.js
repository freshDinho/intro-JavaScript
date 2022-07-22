let titulo = document.querySelector("#paragraph");
let pantalla = document.querySelector("#bigImage"); //imagen
let contMiniaturas = document.querySelector("#imgsContainer");

contMiniaturas.addEventListener("click", (e) => {
  //   console.log(e.target.src);
  if (e.target.src) {
    //si esto existe
    pantalla.src = e.target.src;
    titulo.innerText = e.target.name;
  }
});
