// ES2022

class Human {
  age = 18;
  static category = "animal";
}

// 従来
class Human {
  constructor() {
    this.age = 18;
  }
}

const human = new Human();
console.log(human.age); // 18
