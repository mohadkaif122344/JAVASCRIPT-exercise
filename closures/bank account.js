function createAccount() {
  let balance = 0;
  return {
    deposit: (amount) => balance += amount,
    checkBalance: () => balance
  };
}
const account = createAccount();
account.deposit(100);
console.log(account.checkBalance()); 
