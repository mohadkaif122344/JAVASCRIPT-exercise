// : Use for...of to process items sequentially.
const delays = [1000, 500, 2000];

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processDelays() {
  for (let ms of delays) {
    await delay(ms);
    console.log(`Waited ${ms} ms`);
  }
}

processDelays();
