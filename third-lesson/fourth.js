'use strict';

let keyboard = require('readline-sync');

// Кол-во отрицательных
let minus = 0;
// Кол-во нулей
let zeros = 0;
// Кол-во положительных
let add = 0;

// Количество чисел для проверки
let amount = keyboard.question("Сколько чисел вы планируете проверить - ");

for (let i = 0; i < amount; i++) {
  let current_number = keyboard.question("Введите Ваше число: ");

  if (current_number < 0) {
    minus += 1;
  }

  else if (current_number == 0) {
    zeros += 1;
  }

  else {
    add += 1;
  }
}

console.log(
  `
    Было введено ${amount} чисел.
    Чисел, меньше ноля: ${minus}.
    Чисел, равных нолю: ${zeros}.
    Чисел, больше ноля: ${add}.
  `
);
