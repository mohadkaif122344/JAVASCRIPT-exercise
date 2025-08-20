let a = [1, 2, 3];

a.name = "MyArray";

console.log(a.name);       

for (let key in a) {
  console.log(`${key}: ${a[key]}`);
}




// Negative index
const arr = [10, 20, 30];
console.log(arr.at(-1));