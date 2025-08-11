class HotelRoom {
    #isBooked = false; 

    constructor(roomNumber) {
        this.roomNumber = roomNumber;
    }

    cekin() {
        if (!this.#isBooked) {
            this.#isBooked = true;
            console.log(`Kamar ${this.roomNumber} Kamar telah dipesan.`);
        } else {
            console.log(`Kamar ${this.roomNumber} sudah dipesan sebelumnya.`);
        }
    }

    cekout() {    
        if (this.#isBooked) {
            this.#isBooked = false;
            console.log(`Kamar ${this.roomNumber} telah dikembalikan.`);
        } else {
            console.log(`Kamar ${this.roomNumber} belum pernah dipesan.`);
        }
    }

    info() {
        console.log(`Kamar ${this.roomNumber} - ${this.#isBooked ? "Sudah dipesan" : "Tersedia"}`);
    }
}


const kamar1 = new HotelRoom(101);
kamar1.info();
kamar1.cekin();
kamar1.info();
kamar1.cekin(); 
kamar1.cekout();
kamar1.cekout();
kamar1.info();