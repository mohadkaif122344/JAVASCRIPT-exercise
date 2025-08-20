// Question: Write a function to reverse a string.

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello")); // "olleh"




//   Question: Check if a string is a palindrome.
function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  }
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true




//   Question: Count the number of occurrences of a specific character.
function countChar(str, char) {
    return str.split('').filter(c => c === char).length;
  }
  console.log(countChar("javascript", "a")); // 2



//   Question: Count the number of vowels in a string.
function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
  }
  console.log(countVowels("hello world")); // 3




//   Question: Find the longest word in a sentence.
function longestWord(sentence) {
    return sentence.split(' ').reduce((a, b) => a.length > b.length ? a : b);
  }
  console.log(longestWord("The quick brown fox")); // "quick"



//   Question: Check if two strings are anagrams.
function isAnagram(str1, str2) {
    const normalize = str => str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
  }
  console.log(isAnagram("listen", "silent")); // true




//   Question: Truncate a string if it exceeds a specified length.
function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength - 1) + "…" : str;
  }
  console.log(truncate("Hello world", 8)); // "Hello w…"




//   Question: Capitalize the first letter of each word.
function capitalizeWords(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }
  console.log(capitalizeWords("hello world")); // "Hello World"




//   Question: Trim whitespace from both ends of a string.
function customTrim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }
  console.log(customTrim("   test   ")); // "test"




//   Question: Replace all occurrences of a substring.
function replaceAll(str, find, replace) {
    return str.split(find).join(replace);
  }
  console.log(replaceAll("apple banana apple", "apple", "orange")); // "orange banana orange"




//   Question: Generate a substring of length n from the start.
function getSubstring(str, n) {
    return str.substring(0, n);
  }
  console.log(getSubstring("JavaScript", 4)); // "Java"





//   Question: Check if a string starts with a given substring.  
function startsWith(str, substr) {
    return str.slice(0, substr.length) === substr;
  }
  console.log(startsWith("hello world", "hello")); // true




//   Question: Check if a string ends with a given substring.
function endsWith(str, substr) {
    return str.slice(-substr.length) === substr;
  }
  console.log(endsWith("hello world", "world")); // true




//   Question: Split a string into an array and join it back.
function splitAndJoin(str, separator) {
    return str.split(separator).join(separator);
  }
  console.log(splitAndJoin("a,b,c", ",")); // "a,b,c"





//   Question: Convert hyphen/underscore-separated words to camel case.
function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }
  console.log(toCamelCase("hello-world")); // "helloWorld"





//   Question: Encode HTML entities in a string.
function encodeHTMLEntities(str) {
    const entities = { '<': '&lt;', '>': '&gt;', '&': '&amp;' };
    return str.replace(/[<>&]/g, c => entities[c]);
  }
  console.log(encodeHTMLEntities("<div>")); // "&lt;div&gt;"






//   Question: Remove duplicate characters from a string.
function removeDuplicates(str) {
    return [...new Set(str.split(''))].join('');
  }
  console.log(removeDuplicates("aabbcc")); // "abc"





//   Question: Check if a string contains only alphanumeric characters.
function isAlphanumeric(str) {
    return /^[a-z0-9]+$/i.test(str);
  }
  console.log(isAlphanumeric("Hello123")); // true



//   Question: Format a string by replacing placeholders.
function formatString(str, data) {
    return str.replace(/{(\w+)}/g, (_, key) => data[key]);
  }
  console.log(formatString("Hello {name}", { name: "Alice" })); // "Hello Alice"





//   Question: Concatenate multiple strings with a separator.
function concatenate(separator, ...strings) {
    return strings.join(separator);
  }
  console.log(concatenate("-", "a", "b", "c")); // "a-b-c"
