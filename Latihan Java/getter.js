class Mahasiswa {
    #nama;
    
    constructor(nama) {
        this.#nama = nama;
    }

    get nama() {
        return this.#nama.toUpperCase();
    }

    set mama(value) {
        if (value.length < 10) {
            console.log("Nama terlalu pendek");
            return;
        }
        this.#nama = value;
    }
}

const mhs = new Mahasiswa("ab");

console.log(mhs.nama);

mhs.nama = "p";
mhs.nama = "rehan";
console.log(mhs.nama);
