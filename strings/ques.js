
//   Question: Check if a string starts with a given substring.  
function startsWith(str, substr) {
    return str.slice(0, substr.length) === substr;
  }
  console.log(startsWith("hello world", "hello")); // true

