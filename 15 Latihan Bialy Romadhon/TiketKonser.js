class Ticket {
    constructor(event, price) {
        this.event = event;
        this.price = price;
    }

    printTicket() {
        console.log(`Tiket untuk acara: ${this.event}, Harga: Rp${this.price.toLocaleString('id-ID')}`);
    }
}

class VIPTicket extends Ticket {
    printTicket() {
        console.log(`Tiket untuk acara: ${this.event}, Harga: Rp${this.price.toLocaleString('id-ID')} (VIP)`);
    }
}

function createTicket(event, price) {
    if (price > 100000) {
        return new VIPTicket(event, price);
    }
    return new Ticket(event, price);
}

const tiketBiasa = createTicket('Pameran Seni Lokal', 75000);
const tiketVIP = createTicket('Konser Musik Internasional', 250000);

tiketBiasa.printTicket();
tiketVIP.printTicket();