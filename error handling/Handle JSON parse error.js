try {
  JSON.parse('invalid json');
} catch (e) {
  console.error("Error parsing JSON:", e.message);
}
