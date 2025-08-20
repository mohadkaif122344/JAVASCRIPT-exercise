function multiplyBy(factor) {
  return function(n) {
    return n * factor;
  };
}
const double = multiplyBy(2);
console.log(double(10)); 
