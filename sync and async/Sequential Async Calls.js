// Run two promises in order, not in parallel.
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSequential() {
  await wait(1000);
  console.log("Step 1");
  await wait(1000);
  console.log("Step 2");
}

runSequential();
