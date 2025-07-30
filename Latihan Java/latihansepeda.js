function Sepeda(name, model, color, weight) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.weight = weight;
    this.gear = 20;

    this.start = function() {
        console.log(`${this.model} Dikayuh`);
    };
    this.drive = function() {
        console.log(`${this.name} berjalan`);
    };
    this.break = function() {
        console.log(`${this.name} mengerem`);
    };
}

let sepeda1 =  new Sepeda("TDR3000", 2017, "Orange", "100000kg");
let sepeda2 =  new Sepeda("Mail", 1980, "Green", "6969kg");
let sepeda3 =  new Sepeda("MeiMei", 4000, "Pink", "10kg");

sepeda1.start();
sepeda2.drive();
sepeda3.break();