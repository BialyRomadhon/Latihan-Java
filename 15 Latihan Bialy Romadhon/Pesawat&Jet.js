class Airplane {
    #altitude;

    constructor(initialAltitude = 0) {
        this.#altitude = Math.max(0, Math.min(12000, initialAltitude));
    }

    ascend(meters) {
        if (meters > 0) {
            const newAltitude = this.#altitude + meters;
            this.#altitude = Math.min(12000, newAltitude); 
            console.log(`Naik ${meters} meter. Ketinggian sekarang: ${this.#altitude} meter.`);
        }
    }

    descend(meters) {
        if (meters > 0) {
            const newAltitude = this.#altitude - meters;
            this.#altitude = Math.max(0, newAltitude);
            console.log(`Turun ${meters} meter. Ketinggian sekarang: ${this.#altitude} meter.`);
        }
    }

    checkAltitude() {
        console.log(`Ketinggian saat ini: ${this.#altitude} meter.`);
    }
}

class Jet extends Airplane {
    ascend(meters) {
        console.log("Jet menanjak dengan cepat!");
        
        super.ascend(meters * 2);
    }
}

console.log("\n--- Pesawat Jet ---");
const myJet = new Jet(5000);
console.log("Status awal jet:");
myJet.checkAltitude();

console.log("\nJet menanjak:");
myJet.ascend(2000);

console.log("\nJet turun:");
myJet.descend(1500); 

console.log("\nJet mencoba menanjak melewati batas:");
myJet.ascend(3000); 
myJet.checkAltitude();