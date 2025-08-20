// let number = 10;
// if (number < 5) {
//     console.log("Number is greater than 5");
// }else
// {
// console.log("Number is not greater than 5");
// }



// function checkAge(age) {
//     if (age < 18) {
//         throw new Error("Age must be 18 or older");
//     }
// }




// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;  // Exits the loop when i equals 5
//     }
//     console.log(i);
// }




// // JavaScript program to illustrate If statement
// let i = 10;
// if (i < 15){
//  console.log("10 is less than 15");
// }
// // This statement will be executed
// // as if considers one statement by default
// console.log("I am Not in if");




// // JavaScript program to illustrate If statement
// let age = 19;
// if (age > 18)
// console.log("Congratulations, You are eligible to drive");



// // JavaScript program to illustrate If-else statement
// let i = 10;
// if (i < 15)
// {
//     console.log("i is less than 15");
// }
// else{
//     console.log("I am Not in if");
// }




// // JavaScript program to illustrate nested-if statement
// let i = 10;
// if (i == 10) {  // First if statement
//     if (i < 15) {
//         console.log("i is smaller than 15");
//         // Nested - if statement
//         // Will only be executed if statement above
//         // it is true
//         if (i > 12)
//             console.log("i is smaller than 12 too");
//         else
//             console.log("i is not greater than 12");
//     }
// }




// // JavaScript program to illustrate nested-if statement
// let i = 20;

// if (i == 10)
//     console.log("i is 10");
// else if (i == 15)
//     console.log("i is 15");
// else if (i == 20)
//     console.log("i is 20");
// else
//     console.log("i is not present");




// let day = 3;
// let dayName;
// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day";
// }
// console.log(dayName); // Output: Wednesday




// let grade = 'B';
// let result;
// switch (grade) {
//     case 'A':
//         result = "A (Excellent)";
//         break;
//     case 'B':
//         result = "B (Average)";
//         break;
//     case 'C':
//         result = "C (Below than average)";
//         break;
//     default:
//         result = "No Grade";
// }
// console.log(result);




// let day = 8;
// let dayName;
// switch (day) {
//     default:
//         dayName = "Invalid day";
//         break;
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
// }
// console.log(dayName);




// let grade = 'A'
// let result;
// switch (grade) {
//     case 'A':
//         result = "Grade is excellent"
//         break;
//     case 'B':
//         result = "Grade is good"
//         break;
//     case 'C':
//         result = "Grade is Average "
//         break;
//     case 'D':
//         result = "Grade is Poor"
//         break;
//     default:
//         text = "NO grades achieved";
// }
// console.log(result);





// const fruit = "Mango";
// switch (fruit) {
//     case "Apple":
//         console.log("Apple is healthy.");
//         break;
//     case "Mango":
//         console.log("Mango is delicious.");
//         break;
//     default:
//         console.log("No fruit chosen.");
// }




// const fruit = "Apple";
// switch (fruit) {
//     case "Apple":
//         console.log("Apple is healthy.");
//     case "Mango":
//         console.log("Mango is delicious.");
//         break;
//     default:
//         console.log("No fruit chosen.");
// }




// Using break in a while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    if (i === 3) {
        break;
    }
    i++;
}
// Using break in a do-while loop
let j = 1;
do {
    console.log(j);
    if (j === 3) {
        break;
    }
    j++;
} while (j <= 5);
