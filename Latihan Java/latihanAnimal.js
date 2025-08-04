class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} Bersuara`);
    }
}

class Dog extends Animal {
    constructor(name,color) {
        super(name);
        this.color = color;
    }

    bark() {
        console.log(`${this.name} Menggonggong`);
    }
}

class Bird extends Animal {
    
    fly() {
        console.log(`${this.name} sedang terbang`);
    }
}

const guguk = new Dog("Upin");
const burung = new Bird("Ipin");

guguk.speak();
guguk.bark();
burung.speak();
burung.fly();
