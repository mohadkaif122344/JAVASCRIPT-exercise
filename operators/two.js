

// // JavaScript to illustrate Conditional operator
// let age = 60;
// let res = (age > 59) ? "Adult" : "Not Adult";
// console.log(res);



// // JavaScript to illustrate 
// // multiple Conditional operators
// let marks = 95;
// let res = (marks < 40) ? "Unsatisfactory" :
//           (marks < 60) ? "Average" :
//           (marks < 80) ? "Good" : "Excellent";
// console.log(res);



// let marks = 95;
// let res = (marks > 80) ? 
//           (marks > 90 ? "Excellent" : "Good") : 
//           "Average";
// console.log(res);




// let x = (1, 2, 3);
// console.log(x);



let a = 1, b = 2, c = 3;
let res = (a++, b++, c++);
console.log(res);
console.log(a, b, c);



// function Func1() {
//     console.log('one');
//     return 'one';
// }
// function Func2() {
//     console.log('two');
//     return 'two';
// }
// function Func3() {
//     console.log('three');
//     return 'three';
// }
// // Three expressions are
// // given at one place
// let x = (Func1(), Func2(), Func3());
// console.log(x);




// let s1 = "12";
// // Using unary plus to convert string to number
// let x = +s1;
// console.log(x);
// // Here we are using typeof operator
// console.log(typeof (x))
// // "Geeks" cannot be converted to a number
// let s2 = +"Geeks";
// console.log(s2);




// let s1 = "12";
// // Unary negation, negates the
// // value of number
// let x = -s1;
// console.log(x);
// // Unary negation, tries to convert
// // 'Geeks' to a number
// let s2 = -"Geeks";
// console.log(s2);




// // Case 1: Postfix
// let x = 12;
// let y = x++;
// console.log(x);
// console.log(y);
// // Case 2: Preifix
// x = 10;
// y = ++x;
// console.log(x);
// console.log(y);




// let x = 8;
// let y = x--;
// console.log(x);
// console.log(y);
// x = 15;
// y = --x;
// console.log(x);
// console.log(y);




// let x = false;
// let y = !x;
// console.log(y);
// x = true;
// y = !x;
// console.log(y);




// let x = 10;
// // Bitwise NOT, inverts all bits of 'num'
// let y = ~x;
// console.log(y);



// let x = 18;
// let s = "GeeksforGeeks";
// let isTrue = true;
// let obj = { name: "Aman", age: 21 };
// let undefinedVar;
// console.log(typeof x);
// console.log(typeof s);
// console.log(typeof isTrue);
// console.log(typeof obj);
// console.log(typeof undefinedVar);




// let person = {
//     name: "Ankit",
//     age: 21,
//     city: "Noida"
// };
// console.log(person);
// delete person.age;
// console.log(person);



// function myFunction() {
//     return void 0;
// }
// console.log(myFunction());



// let languages = ["HTML", "CSS", "JavaScript"];
// // true (index 1 exists in the array)
// console.log(1 in languages);
// // false (index 3 doesn't exist in the array)
// console.log(3 in languages);



// const Data = {
//     name: "Rahul",
//     age: 21,
//     city: "Noida"
// };
// // true ("name" property exists in the object)
// console.log("name" in Data);
// // false ("gender" property doesn't exist in the object)
// console.log("address" in Data);




// let languages = ["HTML", "CSS", "JavaScript"];

// console.log(languages instanceof Array);
// console.log(languages instanceof Object);
// console.log(languages instanceof String);
// console.log(languages instanceof Number);




// let myString = new String();
// let myDate = new Date();
// console.log(myString instanceof Object);
// console.log(myString instanceof Date);
// console.log(myString instanceof String);
// console.log(myDate instanceof Date);
// console.log(myDate instanceof Object);
// console.log(myDate instanceof String);




// let s1 = "Geeks";
// let s2 = "forGeeks";
// let res = (s1 + s2);
// console.log(res);



// let s1 = "Geeks";
// let s2 = "forGeeks";
// s1 += s2; 
// console.log(s1);



// let s1 = "gfg";
// let s2 = "gfg";
// console.log(s1 == s2);



// let s1 = "gfg"; // Primitive Type
// let s2 = new String("gfg"); // Object type
// console.log(s1 === s2); // false



// let s1 = "gfg";
// let s2 = "ggg";
// console.log(s1 != s2);



// let s1 = "gfg"; // Primitive Type
// let s2 = new String("ggg"); // Object type
// console.log(s1 != s2);



// let s1 = "age";
// let s2 = "bat";
// console.log(s1 < s2);  // true
// console.log(s1 > s2);  // false
// console.log(s1 <= s2); // true
// console.log(s1 >= s2); // false




