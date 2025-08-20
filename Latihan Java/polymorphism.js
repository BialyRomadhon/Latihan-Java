class Burung {
    constructor(nama) {
        this.nama = nama;
    }
    bersuara() {
        console.log(`${this.nama} bersuara cuit cuit`);
    }
}

class Ayam extends Burung {
    bersuara() {
        console.log(`${this.nama} bersuara kukuruyuk`);
    }
}

class Bebek extends Burung {
    bersuara() {
        console.log(`${this.nama} bersuara kwek kwek`);
    }
}

class Rangga extends Burung {
    bersuara() {
        console.log(`${this.nama} bersuara Dakotkot`);
    }
}

const daftarBurung = [new Ayam("Kate"), new Bebek("Carok"), new Burung("Dara"), new Rangga("Rangga")];

daftarBurung.forEach(burung => {
    burung.bersuara();
});