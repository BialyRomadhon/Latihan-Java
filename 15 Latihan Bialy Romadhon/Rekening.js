class Account {
    #balance;

    constructor(initialBalance = 0) {
  
        this.#balance = Math.max(0, initialBalance);
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposit sebesar Rp${amount.toLocaleString('id-ID')} berhasil. Saldo baru: Rp${this.#balance.toLocaleString('id-ID')}`);
        } else {
            console.log("Jumlah deposit harus positif.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`Penarikan sebesar Rp${amount.toLocaleString('id-ID')} berhasil. Saldo baru: Rp${this.#balance.toLocaleString('id-ID')}`);
        } else {
            console.log("Penarikan gagal: jumlah tidak valid atau saldo tidak mencukupi.");
        }
    }

    checkBalance() {
        console.log(`Saldo saat ini: Rp${this.#balance.toLocaleString('id-ID')}`);
    }
}

class SavingsAccount extends Account {

    withdraw(amount) {
        console.log("Penarikan tidak diizinkan dari akun tabungan (Savings Account).");
    }
}

// Contoh Penggunaan
console.log("--- Akun Biasa ---");
const regularAcc = new Account(500000);
regularAcc.checkBalance();
regularAcc.withdraw(100000);
regularAcc.withdraw(500000);

console.log("\n--- Akun Tabungan ---");
const savingsAcc = new SavingsAccount(1000000);
savingsAcc.checkBalance();
savingsAcc.deposit(200000);
savingsAcc.withdraw(50000);
savingsAcc.checkBalance();
