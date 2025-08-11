class Product {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`Produk: ${this.name}`);
    }
}

class Clothing extends Product {
    constructor(name, size) {
        super(name);
        this.size = size;
    }

    display() {
        console.log(`Produk: ${this.name}, Ukuran: ${this.size}`);
    }
}

const produk1 = new Product("Sapu Mandi");
produk1.display();

const pakaian1 = new Clothing("Celana Dalam", "XXXXL");
pakaian1.display();