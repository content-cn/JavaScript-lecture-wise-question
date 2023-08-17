function main() {
    class Account {
      #accountNumber;
      #balance;
      constructor(accountNumber) {
        this.#accountNumber = accountNumber;
        this.#balance = 0;
      }
  
      get getbalance() {
        return this.#balance;
      }
  
      set setbalance(value) {
        if (value < 0) {
          return "Please enter a positive value for the balance";
        }
        this.#balance = value;
      }
  
      deposit(amount) {
        this.#balance += amount;
      }
  
      withdraw(amount) {
        if (amount > this.#balance) {
          return "Insufficient balance";
        }
        this.#balance -= amount;
      }
    }
  
    // creating an account
    const myAccount = new Account("1234567890");
  
    // depositing funds
    myAccount.deposit(500);
  
    // withdrawing funds
    myAccount.withdraw(200);
  
    // getting the current balance
    console.log(myAccount.getbalance); // output: 300
    return Account;
  }
  