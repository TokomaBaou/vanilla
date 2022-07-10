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

// 一度「田中」の文字列を渡したら、クラスの外から書き換えたくない場合、上記のようなパブリックなフィールドでは不適切になります。
//新機能では、プライベートなフィールドとメソッドのため、クラス外からはアクセスできなくなる
class MyClass {
  // プライベートなフィールド
  #name;

  constructor(name) {
    this.#name = name;
  }

  hello() {
    console.log(`こんにちは${this.#name}さん！`);
  }
}

const foo = new MyClass("田中");
foo.hello(); // 「こんにちは田中さん！」と出力される
console.log(foo.#name); // エラー

await new Promise((resolve) => {
  setTimeout(() => {
    alert("1秒経ちました");
    resolve();
  }, 1000);
});

//instanceofよりも安全にインスタンスかどうかの確認ができる、プライベートフィールドのin演算子
class MyClass2 {
  #brand
  static isMyClass(object) {
    return #brand in object;
  }
}

console.log(MyClass2.isMyClass(new MyClass())); // true
console.log(MyClass2.isMyClass(new Date())); // false

const myInstance = new MyClass2();
console.log(MyClass.isMyClass(myInstance)); // true

const foo = {
  name: "名探偵コナン"
};
console.log(MyClass.isMyClass(foo)); // false