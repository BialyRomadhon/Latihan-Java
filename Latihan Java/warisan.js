class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} sedang makan`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  meow() {
    console.log(`${this.name} si ${this.color} sedang berak`);
  }
}

const kucing = new Cat("hai", "Hitam");
kucing.eat();
kucing.meow();
