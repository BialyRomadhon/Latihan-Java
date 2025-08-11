class Vehicle {
    #speed;

    constructor(initialSpeed = 0) {
       
        this.#speed = Math.max(0, Math.min(180, initialSpeed));
    }

    accelerate(amount) {
        const newSpeed = this.#speed + amount;
        this.#speed = Math.min(180, newSpeed); 
        console.log(`Kecepatan bertambah. Kecepatan saat ini: ${this.#speed} km/h`);
    }

    brake(amount) {
        const newSpeed = this.#speed - amount;
        this.#speed = Math.max(0, newSpeed); 
        console.log(`Kecepatan berkurang. Kecepatan saat ini: ${this.#speed} km/h`);
    }

    checkSpeed() {
        console.log(`Kecepatan saat ini: ${this.#speed} km/h`);
    }
}

class Car extends Vehicle {
    accelerate(amount) {
        console.log("Car accelerating...");
        super.accelerate(amount); 
    }
}

const myCar = new Car();
console.log("Status awal mobil:");
myCar.checkSpeed();

console.log("\nMobil berakselerasi:");
myCar.accelerate(80);

console.log("\nMobil mengerem:");
myCar.brake(30);

console.log("\nMobil berakselerasi hingga batas maksimal:");
myCar.accelerate(200); 