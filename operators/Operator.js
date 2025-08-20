// Logical AND with integers
let x = 5;
let y = 0;

let res = x && y; 
console.log(res); 

res = x && 10;
console.log(res);






// Check if at least one condition is true
let age = 16;
let hasGuardian = true;
if (age >= 18 || hasGuardian) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}





// Logical OR (||) Operator
let i = 1;
let j = null;
let k = undefined;
let l = 0;
console.log(j || k);
console.log(i || l);
console.log(Boolean(j || k));
console.log(Boolean(i || l));






let x = "Hello";
console.log(!x);
console.log(!!x);  
let y = 20;
console.log(!y);
console.log(!!y);






let x = "Hello";
console.log(!x);
console.log(!!x);  
let y = 20;
console.log(!y);
console.log(!!y);







let username = null;
let defaultName = "Guest";
console.log(username ?? defaultName);
username = "Kartik";
defaultName = "Guest";
console.log(username ?? defaultName);






let x = 5; 
let y = 3; 
console.log(x | y);





let x = 5; 
let y = 3; 
console.log(x ^ y);


console.log(~10); 
console.log(~-10);
