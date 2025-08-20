// Given an array of objects representing people, return the names of people who are 18 or older, in uppercase.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 19 },
  { name: 'David', age: 16 }
];

const adults = people
  .filter(person => person.age >= 18)
  .map(person => person.name.toUpperCase());

console.log(adults); 