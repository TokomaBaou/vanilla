// ES2022

export const top = () => {
  class Human1 {
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
  console.log(Human1);
};
