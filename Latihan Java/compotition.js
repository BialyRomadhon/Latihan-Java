class Engine {
    start() {
        console.log("mesin nyala");
    }
}

class GPS {
    navigasi() {
        console.log("Navigasi.....");
    }
}

class Car {
    constructor() {
        this.engine = new Engine();
        this.gps = new GPS();
    }
    
    drive() {
        this.engine.start();
        this.gps.navigasi();
        console.log("mobil berjalan");
    }
}

let myCar = new Car();
myCar.drive();