//private variables in factory functions
const createAccount = (name, age) => {
    let balance = 0; //private
    const getBalance = () => balance;
    const incrementBalance = () => balance++;

    return { name, age, getBalance, incrementBalance };
};

const account = createAccount('james', 24);
console.log(account.name);
console.log(account.balance); //undefined - cannot access balance
console.log(account.getBalance);
