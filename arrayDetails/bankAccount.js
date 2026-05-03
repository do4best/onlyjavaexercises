class BankAccount{
    #accountNumber;
    #balance=0;
    constructor(accountNumber, balance) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }
    // Encapsulation 
    getAccountNumber() {
        return this.#accountNumber;
    }
    getBalance() {
        return this.#balance;
    }
    setBalance(amount) {
        this.#balance= amount
    }
    // Abstract like method
    withDraw(amount) {
        throw new Error("Withdraw amount must be implemented by Subclass")
    }
    // Polymorphism 
    deposit(amount, currency = "Pkr") {
        console.log(`Deposit ${amount} in ${currency}`);
        this.#balance += amount
    }
}