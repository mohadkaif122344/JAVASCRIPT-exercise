
// definition = 
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// Example: Promise that Resolves
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(" Promise resolved!");
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});




// Promise that Rejects
const errorPromise = new Promise((resolve, reject) => {
  const hasError = true;

  if (hasError) {
    reject(" Something went wrong");
  } else {
    resolve("All good!");
  }
});

errorPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));
