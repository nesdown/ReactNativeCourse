// Задача 1. Вычислить среднее арифметическое значений массива

let massiv = [10, 45, 65, 24, 34, 56, 31, 90, 67, 33, 90]

function arifm(massiv) {
  let sum = 0;

  for(let i = 0; i < massiv.length; i++) {
    sum = sum + massiv[i];
  }

  let result = sum / massiv.length;
  return result;
}

console.log(arifm(massiv))
