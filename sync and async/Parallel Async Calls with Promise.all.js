// Run two async tasks at the same time.
function task(name, time) {
  return new Promise(resolve => setTimeout(() => resolve(name), time));
}

async function runParallel() {
  const [a, b] = await Promise.all([
    task("Task A", 1000),
    task("Task B", 1500)
  ]);
  console.log(a, b); 
}

runParallel();
