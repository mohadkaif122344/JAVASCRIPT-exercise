// Write a function that counts vowels in a string.
function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("Hello World")); 






// Write a function that checks if a string is a palindrome.
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("racecar"));
