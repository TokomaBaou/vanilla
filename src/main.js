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
  const human1 = new Human1();
  console.log(human1.age);
};

await new Promise((resolve) => {
  setTimeout(() => {
    alert("1秒経ちました");
    resolve();
  }, 1000);
});
