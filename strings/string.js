// Question: Write a function to reverse a string.

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello")); 





//   Question: Find the longest word in a sentence.
function longestWord(sentence) {
    return sentence.split(' ').reduce((a, b) => a.length > b.length ? a : b);
  }
  console.log(longestWord("The quick brown fox"));



//   Question: Check if two strings are anagrams.
function isAnagram(str1, str2) {
    const normalize = str => str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
  }
  console.log(isAnagram("listen", "silent")); 





//   Question: Capitalize the first letter of each word.
function capitalizeWords(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }
  console.log(capitalizeWords("hello world"));



//   Question: Replace all occurrences of a substring.
function replaceAll(str, find, replace) {
    return str.split(find).join(replace);
  }
  console.log(replaceAll("apple banana apple", "apple", "orange")); 













