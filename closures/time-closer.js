function startTimer() {
  const start = Date.now();
  return function () {
    return (Date.now() - start) / 1000;
  };
}
const timer = startTimer();
setTimeout(() => {
  console.log(`Elapsed: ${timer()} seconds`);
}, 2000);
