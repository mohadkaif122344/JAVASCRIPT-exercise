// Number % Number => Modulus of the number
let x = 9 % 5;
let y = -12 % 5;
let z = 1 % -2;
let a = 5.5 % 2;
let b = -4 % 2;
let c = NaN % 2;
console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);
console.log(c);


// Number ** Number => Exponential of the number
let x = -4 ** 2 
let y = -(4 ** 2);
let z = 2 ** 5;
let a = 3 ** 3;
let b = 3 ** 2.5; 
let c = 10 ** -2;
let d = 2 ** 3 ** 2; 
let e = NaN ** 2;
console.log(y);
console.log(z);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);



// Postfix 
let a = 2;
b = a++; 

let x = 5;
y = ++x; 
console.log(a);
console.log(b);
console.log(x);
console.log(y);




// Prefix
let a = 2;
b = --a; 

let x = 3;
y = x--; 
console.log(a);
console.log(b);
console.log(x);
console.log(y);



let a =  +4;
let b = +'2';   
let c = +true;  
let x = +false; 
let y = +null;  
console.log(a);
console.log(b);
console.log(c);
console.log(x);
console.log(y);



let name = {
    firstName: "Ram",
    lastName: "",
};
console.log(name.firstName);
name.firstName &&= "Shyam";
console.log(name.firstName);

console.log(name.lastName);
name.lastName &&= "Kumar";
console.log(name.lastName);





