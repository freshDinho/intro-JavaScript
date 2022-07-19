/*
Create an object that will be filled only by a function inside of it, and not from someone outside of it's function.. example:

 let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
 }

myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be    filled from outside...
It supposed to be filled using it's own function
Add any type of element on the object.. arrays, objects, int, strings, etc
*/

let myObject = {
  add: function () {
    myObject.ImAnString = "I can be added";
    myObject.ImAnInt = 25;
    myObject.ImAnArray = [1, "can", "be", "added"];
    myObject.ImAnObject = {
      Name: "I can be added",
      age: 2,
    };
  },
};
myObject.add();
Object.freeze(myObject);

myObject.myNewProp = "I can never be added";
console.log(myObject);
