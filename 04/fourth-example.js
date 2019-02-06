// Написать функцию, которая принимает два числа и
// возвращает минимальное из этих двух чисел

function min(a = 0, b = 0) {
  if (a > b) {
    return b;
  }

  else if (a < b) {
    return a;
  }

  else {
    return "Они равны!";
  }
}

function main() {
  let keyboard = require("readline-sync");

  let a = parseInt(keyboard.question("Введите число а: "));
  let b = parseInt(keyboard.question("Введите число b: "));

  return min(a, b);
}


console.log(
  `
    Ваш результат: ${main()}
  `
);
