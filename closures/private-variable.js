function secret() {
  const hidden = 'TOP SECRET';
  return function () {
    return hidden;
  };
}
const getSecret = secret();
console.log(getSecret()); 