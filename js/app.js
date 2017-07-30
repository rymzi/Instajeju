var weapons = ["AK47", "Magnum", "Kim jong fat"];
var soldier = {
  name: "Nicolas",
  age: 22,
  weapon: weapons[2],
  ksKorean: false,
  isDead: false
  sayHi: function() {
    console.log("Hello, my name is" + this.name + "and I'm:" + this.age);
  }
};

function sum(a,b) {
  return a+b;
}

function Substrac(a,b) {
  return a-b;
}

function Divide(a,b) {
  return a/b;
}
function Expo(a,b) {
  return a**b;
}
