//// Number % Number => Modulus of the number
// let x = 9 % 5;
// let y = -12 % 5;
// let z = 1 % -2;
// let a = 5.5 % 2;
// let b = -4 % 2;
// let c = NaN % 2;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);
// console.log(c);


//// Number ** Number => Exponential of the number
// let x = -4 ** 2 // This is an incorrect expression
// let y = -(4 ** 2);
// let z = 2 ** 5;
// let a = 3 ** 3;
// let b = 3 ** 2.5; 
// let c = 10 ** -2;
// let d = 2 ** 3 ** 2; 
// let e = NaN ** 2;
// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);



//// Postfix 
// let a = 2;
// b = a++; // b = 2, a = 3
// // Prefix
// let x = 5;
// y = ++x; // x = 6, y = 6
// console.log(a);
// console.log(b);
// console.log(x);
// console.log(y);


//// Prefix
// let a = 2;
// b = --a; 
// // Postfix 
// let x = 3;
// y = x--; 
// console.log(a);
// console.log(b);
// console.log(x);
// console.log(y);


// let a =  +4;
// let b = +'2';   
// let c = +true;  
// let x = +false; 
// let y = +null;  
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(x);
// console.log(y);



// let name = {
//     firstName: "Ram",
//     lastName: "",
// };

// console.log(name.firstName);

// // Changing the value using logical 
// // AND assignment operator 
// name.firstName &&= "Shyam";

// // Here the value changed because 
// // name.firstName is truthy 
// console.log(name.firstName);

// console.log(name.lastName);

// // Changing the value using logical 
// // AND assignment operator 
// name.lastName &&= "Kumar";

// // Here the value remains unchanged 
// // because name.lastName is falsy 
// console.log(name.lastName);



//// Illustration of (==) operator
// let x = 5;
// let y = '5';
// // Checking of operands
// console.log(x == 5);
// console.log(y == 5);        
// console.log(x == y);
// console.log();
// // Check against special values
// console.log(NaN == NaN);
// console.log(0 == false);   
// console.log(0 == null);



// //Illustration of (!=) operator
// let x = 5;
// let y = '5';
// // Checking of operands
// console.log(x != 6);
// console.log(y != '5');        
// console.log(x != y);
// console.log();
// // Check against special values
// console.log(0 != false);   
// console.log(0 != null);
// console.log(NaN != NaN);



// // Illustration of (===) operator
// let x = 5;
// let y = '5';
// // Checking of operands
// console.log(x === 6);
// console.log(y === '5');        
// console.log(x === y);
// console.log();
// // Check against special values
// console.log(NaN === NaN);   
// console.log(0 === false);   
// console.log(0 === null);



// // Illustration of (!==) operator
// let x = 5;
// let y = '5';
// // Checking of operands
// console.log(x !== 6);
// console.log(y !== '5');        
// console.log(x !== y);
// console.log();
// // Check against null and boolean value
// console.log(0 !== false);   
// console.log(0 !== null);
// console.log(NaN !== NaN);



// // Illustration of (>) operator
// let x = 5;
// let y = "5";
// // Checking of operands
// console.log(x > 0);
// console.log(y > "10");        
// console.log(x > "10");
// console.log(y > 0);



// // Illustration of (>=) operator
// let x = 5;
// let y = "5";
// // Checking of operands
// console.log(x >= 5);
// console.log(y >= "15");        
// console.log(x >= "5");
// console.log(y >= 15);



// // Illustration of (<) operator
// let x = 5;
// let y = "5";
// // Checking of operands
// console.log(x < 15);
// console.log(y < "0");        
// console.log(x < "0");
// console.log(y < 15);



// // Illustration of (<=) operator
// let val1 = 5;
// let val2 = "5";
// // Checking of operands
// console.log(val1 <= 15);
// console.log(val2 <= "0");        
// console.log(val1 <= "0");
// console.log(val2 <= 15);



// // Logical AND with integers
// let x = 5;
// let y = 0;
// // 5 (true) && 0 (false)
// let res = x && y; 
// console.log(res); 
// // 5 (true) && 10 (true)
// res = x && 10;
// console.log(res);


// // Check if at least one condition is true
// let age = 16;
// let hasGuardian = true;
// // Logical OR checks if either condition is true
// if (age >= 18 || hasGuardian) {
//   console.log("Allowed");
// } else {
//   console.log("Not Allowed");
// }


// // Logical OR (||) Operator
// let i = 1;
// let j = null;
// let k = undefined;
// let l = 0;
// console.log(j || k);
// console.log(i || l);
// console.log(Boolean(j || k));
// console.log(Boolean(i || l));


// let x = "Hello";
// console.log(!x);
// console.log(!!x);  
// let y = 20;
// console.log(!y);
// console.log(!!y);



// let username = null;
// let defaultName = "Guest";
// console.log(username ?? defaultName);
// username = "Kartik";
// defaultName = "Guest";
// console.log(username ?? defaultName);


// let x = 5; 
// let y = 3; 
// console.log(x | y);


// let x = 5; 
// let y = 3; 
// console.log(x | y);


// let x = 5; 
// let y = 3; 
// console.log(x ^ y);



// console.log(~10); 
// console.log(~-10);


// let a = 4; 
// console.log(a << 1); 
// console.log(a << 4);


// let a = 4; 
// let b = -32 
// console.log(a >> 1); 
// console.log(b >> 4);


// let a = 4; 
// let b = -1 
// console.log(a >>> 1); 
// console.log(b >>> 4);


