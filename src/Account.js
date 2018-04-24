function Account(transaction = new Transaction()) {
  this.balance = 0;
  this.transaction = transaction;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transaction.add(undefined, amount, this.getBalance());
};

Account.prototype.withdraw = function (amount) {
  this.isSufficentFundsAvailable(amount);
  this.balance -= amount;
  this.transaction.add(undefined, -amount, this.getBalance());
}

Account.prototype.isSufficentFundsAvailable = function (amount) {
  if ((this.getBalance() - amount) < 0) {
    throw 'Error - insufficient funds available';
  };
};

Account.prototype.getBalance = function () {
  return this.balance;
};

Account.prototype.history = function () {
  return this.transaction.getHistory()
}
