// let div = document.getElementById("div");
// let btn = document.createElement("button");

let div = document.getElementById("one");
let btn = document.getElementById("button");

btn.addEventListener("click", function () {
  console.log("click");
  div.insertAdjacentHTML("beforeend", '<input id="input" type="text">');
});
