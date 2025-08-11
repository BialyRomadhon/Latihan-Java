class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    
  }
info() {
  console.log(`Book created: ${this.title} by ${this.author}, ${this.year}`);
}
}  

class ebook extends Book {
  constructor(title, author, year,) {
    super(title, author, year);
    this.filesize = this.filesize;
  }

  info() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Filesize: ${this.filesize}`);
  }
}

const Buku = new Book("Buku A", "Pengarang A", 2020);
const Ebook = new ebook("Ebook c", "Pengarang d", 2021,);
Buku.info();
Ebook.info();