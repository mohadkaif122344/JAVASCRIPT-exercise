// Write a function that checks if a number is even or odd.
function isEven(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}
console.log(isEven(4)); 





// Write a function that returns a random number between min and max.


function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(1, 10)); 
