class employee {
    constructor(name, jabatan, gaji) {
        this.name = name;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }
}

class departemen extends employee {
    constructor(name, jabatan, gaji) {
        super(name, jabatan, gaji);
    }

    perkenalan() {
        console.log(`${this.name} Memimpin departement ${this.jabatan} dengan gaji ${this.gaji}`);
    }
}

const manager1 = new departemen("Rangga", "Keuangan", "15jt");
const manager2 = new departemen("Bialy", "IT", "17jt");

manager1.perkenalan();
manager2.perkenalan();