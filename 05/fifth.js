let rabbit = {};

  // Все функции внутри объектов - анонимные!
  rabbit.run = function(n) {
    console.log("Кролик пробежал " + n + " метров!");
  };

  rabbit.action = function() {
    let keyboard = require("readline-sync");
    let distance = parseInt(keyboard.question("Сколько должен бежать кролик: "));
    let steps = '🐰'

    for (let i = 0; i < distance; i++) {
      setTimeout(function() {
        steps = steps + '🐰';
        console.log(steps);
      }, 500);
    }

    rabbit.run(distance);
  };


rabbit.action();
