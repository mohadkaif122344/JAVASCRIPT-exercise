function square(n) {
  if (typeof n !== 'number') throw new Error('Not a number!');
  return n * n;
}
try {
  square('a');
} catch (e) {
  console.log(e.message); 
}
