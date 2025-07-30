// class Car{
//     constructor(name, model, color) {
//         this.name =name;
//         this.model = model;
//         this.color = color;
//     }

//     start() {
//         console.log(`${this.name} Dinyalakan`);
//     }
//     drive() {
//         console.log(`${this.name} Jalan`);
//     }
// }

// let car1 = new Car("Toyota", 2021, "black");

// car1.start();

class Sepeda{
    constructor(name, model, color, gear) {
        this.name =name;
        this.model = model;
        this.color = color;
        this.gear = gear;
    }

    start() {
        console.log(`${this.name} Dinyalakan`);
    }
    drive() {
        console.log(`${this.name} Jalan`);
    }
    gigi() {
        console.log(`${this.gear} jumlah gear`);
    }
}

let sepeda1 = new Sepeda("TDR3000", 2091, "green", "50");
let sepeda2 = new Sepeda("Polygon", 2021, "black", "40");

sepeda1.start();
sepeda2.gigi();