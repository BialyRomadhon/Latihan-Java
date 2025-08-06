class User {
    #password;
    constructor(password) {
        this.#password = password;
    }

    checkPassword(input) {
        if (input === this.#password) {
            console.log("benar");
        } else {
            console.log("salah");
        }
    }
}


const user = new User("rahasia");
user.checkPassword("kocak");