class Animal {
    #energy = 50;

    eat(amount) {
        this.#energy += amount;
        if (this.#energy > 100) {
            this.#energy = 100;
        }
        console.log(`Energi bertambah ${amount}. Energi saat ini: ${this.#energy}`);
    }

    sleep(time) {
        this.#energy += time * 5;
        if (this.#energy > 100) {
            this.#energy = 100;
        }
        console.log(`Tidur selama ${time} jam. Energi saat ini: ${this.#energy}`);
    }

    checkEnergy() {
        console.log(`Energi saat ini: ${this.#energy}`);
    }
}

class Dog extends Animal {
    eat(amount) {
        const newAmount = amount * 1.5;
        super.eat(newAmount);
        console.log(`(Sebagai Dog) Energi bertambah lebih cepat.`);
    }
}


const myDog = new Dog();

console.log("--- Status Awal ---");
myDog.checkEnergy();

console.log("\n--- Aksi: Memberi makan Dog ---");
myDog.eat(10);

console.log("\n--- Aksi: Dog tidur ---");
myDog.sleep(3);

console.log("\n--- Status Akhir ---");
myDog.checkEnergy();
