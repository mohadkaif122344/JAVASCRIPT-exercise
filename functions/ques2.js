// Write a function that returns the sum of two numbers.
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); 




// Write a function to capitalize the first letter of each word in a string.
function capitalizeWords(str) {
  return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}
console.log(capitalizeWords("hello world")); 

