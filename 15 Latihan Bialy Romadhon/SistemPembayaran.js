
class Payment {
    #amount;

    constructor(amount) {
        this.#amount = amount;
    }

    get amount() {
        return this.#amount;
    }

    process() {
        console.log(`Memproses pembayaran sebesar Rp${this.#amount.toLocaleString('id-ID')}`);
    }
}

class CreditCardPayment extends Payment {
    process() {
        console.log(`Memproses pembayaran kartu kredit sebesar Rp${this.amount.toLocaleString('id-ID')}`);
    }
}

console.log("\n--- Pembayaran Biasa ---");
const bayar1 = new Payment(250000);
bayar1.process();

console.log("\n--- Pembayaran Kartu Kredit ---");
const bayar2 = new CreditCardPayment(500000);
bayar2.process();
