## JS Scoping exercises

#### Nombre: Edgar Villa

1. What’s the result of executing this code and why.

```
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

_undefined 2_
_undefined 2_

2. What is result?

```
var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
```

_la consola no regresa nada solo se queda la asignacion de firstResult = 5 result = 5_
_la consola no regresa nada_

3. What is the result of the following code? Explain your answer.

```
var a = 1;
function foo() {
  var a = 2;

  function bar() {
    console.log(a);
  }

  return bar;
}
var baz = foo();
baz();
```

_2_
_2_

4. What will you see in the console for the following example?

```
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
```

_la consola no regresa nada solo se queda la asignacion de a = 10_
_la consola no regresa nada_
