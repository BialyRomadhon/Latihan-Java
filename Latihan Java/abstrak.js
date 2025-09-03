class Animal {
    constructor() {
        if (new.target === Animal) {
            throw new Error("Animal adalah abstract class, tidak bisa di-instantiate langsung");
        }
    }

    makeSound() {
        throw new Error("Method 'makeSound()' harus diimplementasikan di subclass!");
    }
}

class Dog extends Animal {
    makeSound() {
        return("woof");
    }
}

class Cat extends Animal {
    makeSound() {
        return("meow");
    }
}

let d = new Dog();
console.log(d.makeSound());


// let a = new Animal(); 
// a.makeSound();