class Turtle {
  constructor(name, color) {
    this.name = name;
    this.weapon = "hands";
    let _color = color;
    this.setColor = (color) => {
      if (typeof color === "string") {
        return (_color = color);
      } else {
        throw new Error("Color must be a string");
      }
    };
    this.getColor = () => _color;
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
