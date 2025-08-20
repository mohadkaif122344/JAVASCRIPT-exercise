// definition =
//  A synchronous function is executed line by line, and the next line doesn’t run until the current one finishes.


// Multiple Synchronous Steps
function step1() {
  console.log("Step 1");
}

function step2() {
  console.log("Step 2");
}

function step3() {
  console.log("Step 3");
}

step1();
step2();
step3();





// Simple Synchronous Function
function greet(name) {
  return `Hello, ${name}`;
}

const message = greet("Alice");
console.log(message);
console.log("This runs after the greet function.");
