//   Question: Concatenate multiple strings with a separator.
function concatenate(separator, ...strings) {
    return strings.join(separator);
  }
  console.log(concatenate("-", "a", "b", "c")); // "a-b-c"
