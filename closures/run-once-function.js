function once(fn) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      return fn();
    }
  };
}
const logOnce = once(() => console.log("Run only once"));
logOnce();
logOnce(); 
