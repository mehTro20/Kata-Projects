var balance = bankTransaction();

function bankTransaction(withdraw, deposit) {
  let newBalance = 0;

  if (balance === undefined) {
    balance = newBalance;
  }
  if (withdraw === null && deposit === null) {
    newBalance = balance;
    return newBalance;
  }
  if (withdraw !== null && deposit === null) {
    if (withdraw > balance) {
      return "Insufficient funds";
    }
    newBalance = balance - withdraw;
    return newBalance;
  }
  if (withdraw === null && deposit !== null) {
    newBalance = balance + deposit;
    return newBalance;
  }
}

console.log(bankTransaction(null, 400));
console.log(balance);
