// Call one async function from another.
async function getName() {
  return "Alice";
}

async function greet() {
  const name = await getName();
  console.log(`Hello, ${name}`);
}

greet();
