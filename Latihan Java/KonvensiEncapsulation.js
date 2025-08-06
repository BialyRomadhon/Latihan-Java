class BankAccount {
    constructor() {
        this._balance = 0;
    }

deposit(amount) {
    this._balance += amount;
    }

showBalanace() {
    console.log(`Saldo saat ini: Rp${this._balance}`);

    }
}

const akun = new BankAccount();
akun.deposit(100000);
akun.showBalanace();

akun._balance = 500000; 
akun.showBalanace();
