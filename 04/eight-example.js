// 1 - Написать функцию, которая выводит массив с наибольшей суммой эл-в
// 2 - все массивы должны вводится с клавиатуры.

function inputArray() {
  let keyboard = require("readline-sync");
  let amount = parseInt(keyboard.question("Сколько элементов в массиве: "));

  let resultArray = [];

  for(let i = 0; i < amount; i++) {
    let element = parseInt(keyboard.question("Введите элемент №" + i + ": "));
    resultArray[i] = element;
  }

  return resultArray;
}

function sumArray(firstArray, secondArray) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < firstArray.length; i++) {
    sum1 = sum1 + firstArray[i];
  }

  for (let i = 0; i < secondArray.length; i++) {
    sum2 = sum2 + secondArray[i];
  }

  if (sum1 > sum2) {
    console.log(firstArray);
  }

  else {
    console.log(secondArray);
  }
}

let one = inputArray();
let two = inputArray();
sumArray(one, two);
