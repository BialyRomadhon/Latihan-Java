class Vehicle {
    move() {
        console.log("Kendaraan bergerak");
    }
}

class Car extends Vehicle {
    move() {
        console.log("Mobil berjalan di jalan raya");
    }
}

class Boat extends Vehicle {
    move() {
        console.log("Perahu berlayar di laut");
    }
}


const myCar = new Car();
const myBoat = new Boat();

myCar.move();
myBoat.move();

function startMovement(vehicle) {
    vehicle.move();
}

console.log("\nMenggunakan fungsi generik:");
startMovement(myCar);
startMovement(myBoat);