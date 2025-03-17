//private variables in factory functions
const createAccount = (name, age) => {
    let balance = 0; //private
    const getBalance = () => balance;
    const incrementBalance = () => balance++;

    return { name, age, getBalance, incrementBalance };
};

// const account = createAccount('james', 24);
// console.log(account.name);
// console.log(account.balance); //undefined - cannot access balance
// console.log(account.getBalance);

//feedback:
const createAccount2 = (name, age) => {
    let balance = 0; // private variable

    const getBalance = () => balance;
    const deposit = (amount) => {
        if (typeof amount !== 'number' || amount <= 0) {
            console.log('Invalid amount. Deposit must be a positive number.');
            return;
        }
        balance += amount;
    };
    const withdraw = (amount) => {
        if (typeof amount !== 'number' || amount <= 0) {
            console.log('Invalid amount. Withdrawal must be a positive number.');
            return;
        }
        if (amount > balance) {
            console.log('Insufficient funds.');
            return;
        }
        balance -= amount;
    };

    return { name, age, getBalance, deposit, withdraw };
};

// Test cases
const account2 = createAccount('James', 24);
console.log(account2.name); // ✅ James
console.log(account2.balance); // ❌ undefined (private variable)
console.log(account2.getBalance()); // ✅ 0

account2.deposit(100);
console.log(account2.getBalance()); // ✅ 100

account2.withdraw(50);
console.log(account2.getBalance()); // ✅ 50

account2.withdraw(100); // ❌ Insufficient funds
account2.deposit(-10); // ❌ Invalid deposit
