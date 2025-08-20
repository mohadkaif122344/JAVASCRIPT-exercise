function getUserAge(age) {
  if (age < 0) throw new RangeError("Age cannot be negative");
  return age;
}
try {
  getUserAge(-5);
} catch (e) {
  console.log(e.name + ": " + e.message);
}
