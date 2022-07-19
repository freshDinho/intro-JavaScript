/*
Create an object that will be filled only by a function inside of it, and not from one outside of its function.. example:

 let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
 }

myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
It's supposed to be filled using its own function
Add any type of element on the object.. arrays, objects, int, strings, etc.
*/

// POSIBLE SOLUCION 1 ¯\_(ツ)_/¯

let myObject = {
  add: function (string, int, array, object) {
    myObject.ImAnString = string;
    myObject.ImAnInt = int;
    myObject.ImAnArray = array;
    myObject.ImAnObject = object;
    Object.freeze(myObject);
  },
};
myObject.add("I can be added", 25, [1, "can", "be", "added"], {
  Name: "I can be added",
  age: 2,
});
myObject.myNewProp = "I can never be added";
console.log(myObject);

// POSIBLE SOLUCION 2 ¯\_(ツ)_/¯

let myObject2 = {
  add: function (string, int, array, object) {
    Object.defineProperties(myObject2, {
      Name: {
        value: string,
        configurable: false,
        writable: false,
      },
      Age: {
        value: int,
        configurable: false,
        writable: false,
      },
      Colors: {
        value: array,
        configurable: false,
        writable: false,
      },
      Car: {
        value: object,
        configurable: false,
        writable: false,
      },
    });
    Object.freeze(myObject2);
  },
};

myObject2.add("I'm a String", 20, ["red", "black", "white"], {
  type: "Fiat",
  model: 500,
  color: "white",
});
myObject2.Pet = "dog"; // I never be added
myObject2.Name = "Jhon"; // I never be added

console.log(
  myObject2.Name,
  myObject2.Age,
  myObject2.Colors,
  myObject2.Car,
  myObject2.Pet
);
