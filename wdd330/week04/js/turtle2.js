class Turtle {
  constructor(name, color) {
    this.name = name;
    let _color = color;
    this.setColor = (color) => {
      return (_color = color);
    };
    this.getColor = () => _color;
  }
}

this.setColor = (color) => {
  if (typeof color === "string") {
    return (_color = color);
  } else {
    throw new Error("Color must be a string");
  }
};
