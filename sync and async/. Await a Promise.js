// Await a Promise that resolves to "Done" after 1 second.
function delay() {
  return new Promise(resolve => setTimeout(() => resolve("Done"), 1000));
}

async function getResult() {
  const result = await delay();
  console.log(result); 
}

getResult();
