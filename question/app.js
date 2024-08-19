// Section5
// Q1 変数
let nickname = "あゆみ";
let age = 26;

console.log("私のニックネームは" + nickname + "です。年齢は" + age + "です。");

// Q2 配列
let languages = ["JavaScript", "PHP", "Ruby", "Python"];

console.log(
  `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`
);

// Q3 オブジェクト
let user = {
  name: "John",
  age: 26,
  bloodType: "A",
  favorite: "card",
};

console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: "John",
    age: 26,
    favorites: ["Card Game", "Basket Ball", "Programming"],
  },
  {
    name: "Bob",
    age: 33,
    favorites: ["Tinder", "The Legend of Zelda"],
  },
  {
    name: "Michael",
    age: 22,
    favorites: ["Football", "Smash Bros."],
  },
];

console.log(playerList[1].favorites[1]);

// Q5 四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// Q6 関数
function sayHello() {
  console.log("Hello");
}
sayHello();

const sayWorld = function () {
  console.log("World");
};
sayWorld();

// Q7 メソッド
user.birthday = "2000-09-27";

user.sayHello = function () {
  console.log("Hello!");
};

// Q8 引数
let calc = {};

// 和
calc.add = function (x, y) {
  console.log(x + y);
};
calc.add(3, 4);

// 差
calc.subtract = function (x, y) {
  console.log(x - y);
};
calc.subtract(20, 10);

// 積
calc.multiply = function (x, y) {
  console.log(x * y);
};
calc.multiply(7, 7);

// 商
calc.divide = function (x, y) {
  console.log(x / y);
};
calc.divide(25, 5);

// Q9 返り値
function remainder(x, y) {
  return x % y;
}
console.log("5 を 3 で割った余りは " + remainder(5, 3) + " です。");

// Q10 スコープ
/* 解答
関数の中で定義した変数は、その関数内でだけスコープが有効なため、関数外から参照しようとすると未定義のエラーが発生します。
*/

// Section6
// Q1 標準組み込みオブジェクト
let random = Math.floor(Math.random() * 10);
console.log(random);

// Q2 コールバック関数
setTimeout(message, 3000);

function message() {
  console.log("Hello World!");
}

// Q3 if
let num = 0;

if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else {
  console.log("num is 0");
}

// Q4 for
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers[i] = i;
}
console.log(numbers);

// Q5 for × if
let mixed = [4, "2", 5, "8", "9", 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === "string") {
    console.log("not number");
  } else if (mixed[i] % 2 === 1) {
    console.log("odd");
  } else if (mixed[i] % 2 === 0) {
    console.log("even");
  }
}
