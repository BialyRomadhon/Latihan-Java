class Car {
    constructor(name, isElectric = false) {
        this.name = name;
        this.isElectric = isElectric;
    }
}

class ParkingSpot {
    #isOccupied;
    #spotNumber;

    constructor(spotNumber) {
        this.#spotNumber = spotNumber;
        this.#isOccupied = false;
    }

    occupy() {
        this.#isOccupied = true;
        console.log(`Tempat parkir ${this.#spotNumber} sekarang terisi.`);
    }

    vacate() {
        this.#isOccupied = false;
        console.log(`Tempat parkir ${this.#spotNumber} sekarang kosong.`);
    }

    checkStatus() {
        const status = this.#isOccupied ? 'terisi' : 'kosong';
        console.log(`Status tempat parkir ${this.#spotNumber}: ${status}.`);
    }
}

class ElectricParkingSpot extends ParkingSpot {
    
    occupy(car) {
        if (car && car.isElectric) {
            console.log("Mobil listrik terdeteksi. Memarkir...");
            super.occupy(); 
        } else {
            console.log("Gagal: Hanya mobil listrik yang diizinkan (Only electric cars allowed).");
        }
    }
}

console.log("\n--- Tempat Parkir Khusus Mobil Listrik ---");

const electricSpotA1 = new ElectricParkingSpot('A1');
const electricCar = new Car('Wuling Air EV', true);
const regularCar = new Car('Honda Brio');

console.log("Status awal:");
electricSpotA1.checkStatus();

console.log("\n1. Mencoba parkir dengan mobil biasa:");
electricSpotA1.occupy(regularCar); 
electricSpotA1.checkStatus();

console.log("\n2. Mencoba parkir dengan mobil listrik:");
electricSpotA1.occupy(electricCar); 
electricSpotA1.checkStatus();

console.log("\n3. Mengosongkan tempat parkir:");
electricSpotA1.vacate();
electricSpotA1.checkStatus();