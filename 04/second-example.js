let keyboard = require("readline-sync");
// У П - 2 яблока, у В - 3, сколько у них всего?
// У П - 4 яьлока, В заьрал 3, сколько всего
// У П - 5 яблок, ему подарили 4, сколько стало?

// 1 - сколько яблок было у ребят вместе?
// 2 - У Пети Вася забирает яблоки
// 3 - У Васи Петя забирает яблоки

function taskSolver(peterApples, vasyaApples, action) {
  if (action == 1) {
    console.log(
      `
        У Пети было ${peterApples}
        У Васи было ${vasyaApples}
        А вместе, у ребят было ${peterApples + vasyaApples}
      `
    )
  }

  else if (action == 2) {
    let takesApple = parseInt(keyboard.question("Сколько яблок забираем: "));

    console.log(
      `
        У Пети было ${peterApples}
        У Васи было ${vasyaApples}
        У Пети стало ${peterApples - takesApple}
        У Васи стало ${vasyaApples + takesApple}
      `
    )
  }

  else if (action == 3) {
    let takesApple = keyboard.question("Сколько яблок забираем: ");

    console.log(
      `
        У Пети было ${peterApples}
        У Васи было ${vasyaApples}
        У Пети стало ${peterApples + takesApple}
        У Васи стало ${vasyaApples - takesApple}
      `
    )
  }
}

taskSolver(5, 10, 1);
taskSolver(6, 4, 2);
taskSolver(6, 7, 3);
