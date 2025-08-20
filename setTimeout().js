// definition= 
//      The setTimeout() function is used to execute a function after a specified delay (in milliseconds).

setTimeout(() => {
  console.log("This message is delayed by 2 seconds.");
}, 2000);




// ///////
// You can cancel a scheduled setTimeout() using clearTimeout().
const timeoutId = setTimeout(() => {
  console.log("This will not run.");
}, 5000);

clearTimeout(timeoutId); 




// async setTimeout
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

