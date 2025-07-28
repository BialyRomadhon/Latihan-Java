let car = {
    
    name: "tsubasa",
    model: 500,
    weight: "850kg",
    color: "white",

    start: function() {
        console.log("mobil dinyalakan");
    },

    drive: function() {
        console.log("mobil berjalan")
    },

    brake: function() {
        console.log("mobil mengerem")
    },

    stop: function() {
        console.log("mobil berhenti")
    }
    
};

console.log(car.name);
console.log(car.color);

car.start();
car.drive();