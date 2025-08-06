class SecureAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    showBalance() {
        console.log(`Saldo Aman :${this.#balance}`);
    }
}

const akun = new SecureAccount();
akun.deposit(100000);
// akun.#balance = 9999999999999999999;
akun.showBalance();