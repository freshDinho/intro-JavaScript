/*
  Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:
 */
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
let studentKeys = Object.keys(student);
console.log(studentKeys);

for (let i = 0; i < studentKeys.length; i++) {
  console.log(`(${i}) --> ${studentKeys[i]}`);
}
