class Turtle {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hi dude, my name is ${this.name}`;
  }
  swim() {
    return `${this.name} paddles in the water`;
  }

  // toString() {
  //   return `A turtle called ${this.name}`;
  // }
}

class NinjaTurtle extends Turtle {
  constructor(name) {
    super(name);
    this.weapon = "hands";
  }

  attack() {
    return `Feel the power of my ${this.weapon}!`;
  }
}
