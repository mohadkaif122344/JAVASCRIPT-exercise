// definition=
//  A callback is a function passed as an argument to another function, which is then invoked inside that function.

function doSomething(callback) {
  
  callback();  
}


// example
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);




// Anonymous Callback Function
function processUserInput(callback) {
  const name = "John";
  callback(name);
}

processUserInput(function(name) {
  console.log(`Welcome, ${name}`);
});






// Callback with Math Operation
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

const result = calculate(5, 3, add);
console.log(result); 

