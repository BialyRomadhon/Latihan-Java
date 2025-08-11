class User {

    #password;

    constructor(password) {

        this.#password = password;
    }

    checkPassword(input) {
        if (input === this.#password) {
            console.log("Benar");
        } else {
            console.log("Salah");
        }
    }
}

const user1 = new User("RahasiaNegara123");

console.log("Mencoba password yang benar:");
user1.checkPassword("RahasiaNegara123"); 

console.log("\nMencoba password yang salah:");
user1.checkPassword("passwordSalah");