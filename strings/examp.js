//   Question: Count the number of occurrences of a specific character.

function countChar(str, char) {
    return str.split('').filter(c => c === char).length;
  }
  console.log(countChar("javascript", "a")); 