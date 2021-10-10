function mixin(target, ...objects) {
  for (const object of objects) {
    if (typeof object === "object") {
      for (const key of Object.keys(object)) {
        if (typeof object[key] === "object") {
          target[key] = Array.isArray(object[key]) ? [] : {};
          mixin(target[key], object[key]);
        } else {
          Object.assign(target, object);
        }
      }
    }
  }
  return target;
}

function copy(target) {
  const object = Object.create(Object.getPrototypeOf(target));

  mixin(object, target);

  return object;
}

function copy(target) {
  const object = Object.create(Object.getPrototypeOf(target));
  mixin(object, target);
  return object;
}

function createSuperhuman(...mixins) {
  const object = copy(Superhuman);
  return mixin(object, ...mixins);
}

const Human = {
  arms: 2,
  legs: 2,
  walk() {
    console.log("Walking");
  },
};

const Superhuman = Object.create(Human);

const superman = Object.create(Superhuman);

Superhuman.change = function () {
  return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
};

Superhuman.init = function (name, realName) {
  this.name = name;
  this.realName = realName;
  this.init = undefined; // this line removes the init function, so it can only be called once
  return this;
};

Superhuman.change = function () {
  return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
};

superman.findFriends = function () {
  this.friends.forEach(function (friend) {
    console.log(`${friend.name} is friends with ${this.name}`);
  });
};

const flight = {
  fly() {
    console.log(`Up, up and away! ${this.name} soars through the air!`);
    return this;
  },
};

const superSpeed = {
  move() {
    console.log(`${this.name} can move faster than a speeding bullet!`);
    return this;
  },
};

const xRayVision = {
  xray() {
    console.log(`${this.name} can see right through you!`);
    return this;
  },
};
