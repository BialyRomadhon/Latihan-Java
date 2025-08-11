class Account {
    #balance = 0;


    get currentBalance() {
        return this.#balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposit Rp${amount.toLocaleString('id-ID')} berhasil.`);
        }
    }

    showBalance() {
        console.log(`Saldo: Rp${this.currentBalance.toLocaleString('id-ID')}`);
    }
}

class PremiumAccount extends Account {

    showBalance() {
        console.log(`Saldo anda adalah: Rp${this.currentBalance.toLocaleString('id-ID')} (Akun Premium)`);
    }
}

console.log("\n--- Akun Biasa ---");
const regularUser = new Account();
regularUser.deposit(150000);
regularUser.showBalance();

console.log("\n--- Akun Premium ---");
const premiumUser = new PremiumAccount();
premiumUser.deposit(500000);
premiumUser.showBalance();