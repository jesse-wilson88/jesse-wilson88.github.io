class Turtle {
  constructor(name) {
    this.name = name;
    this.weapon = "hands";
  }
  sayHi() {
    return `Hi dude, my name is ${this.name}`;
  }
  attack() {
    return `Feel the power of my ${this.weapon}!`;
  }
}

Turtle.prototype.eat = function () {
  return "Mmm, this ${this.food} tastes great!";
};
