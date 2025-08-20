//   Question: Format a string by replacing placeholders.
function formatString(str, data) {
    return str.replace(/{(\w+)}/g, (_, key) => data[key]);
  }
  console.log(formatString("Hello {name}", { name: "Alice" })); 

