// We've already used OOP in JS before e.g: code below.
const arr = [1, 2, 3, 4];
const address = {
  street: "1600 Pennsylvania Avenue NW",
  city: "Washington",
  state: "DC",
  zipCode: "20500",
};

// Defining a JavaScript Class.
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;

    // Method on Static Variables.
    Book.numBooks += 1;
  }

  // Static Variables.
  static numBooks = 0;

  // Defining an instance method.
  getInformation() {
    return `${this.title} written by: ${this.author}`;
  }

  // Static Methods.
  static getTitles(...books) {
    return books.map((book) => book.title);
  }
}

// Instantiating an instance of a class.
const fellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);
