class Student{
    constructor(name, departement, angakatan){
        this.name = name;
        this.departement = departement;
        this.angakatan = angakatan;
    }

    introduce() {
        console.log(`halo, saya ${this.name}, mahasiswa ${this.departement} angkatan ${this.angakatan}`);
    }

    isSenior() {
        return this.angakatan < 2023;
    }
}

let student = new Student("Rangga", "Aselole", "1970");
let student2 = new Student("Bialy", "NTT", "2027");

student.introduce();
console.log(student.isSenior());
student2.introduce();
console.log(student2.isSenior());