let sepeda = {
    
    name: "RanggaAselole",
    gear: "21",
    color: "PinkPastel",

    start: function() {
        console.log("Sepeda diKayuh");
    },

    brake: function() {
        console.log("Sepeda Mengerem")
    },

    ngedrag: function() {
        console.log("Sepeda Ngedrag")
    }
    
};

console.log("Nama : " + sepeda.name);
console.log("Warna : " + sepeda.color);
console.log("Gigi : " + sepeda.gear);

sepeda.start();
sepeda.brake();
sepeda.ngedrag();
