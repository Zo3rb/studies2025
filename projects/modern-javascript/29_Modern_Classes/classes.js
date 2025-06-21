// Our old constructor way
function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

// The new class way - same functionality!
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// They work the same way
const user = new User("John", 30);
user.greet(); // "Hi, I'm John"
