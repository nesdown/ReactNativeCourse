// Функция-вопрос
// 1 - сам вопрос
// 2 - что делать, если ответ "Да"
// 3 - что делать, если пользователь ответил "Нет"

function ask(question, yes, no) {
  if (question()) {
    yes()
  }

  else {
    no()
  }
}

ask(
  function() {
    let keyboard = require("readline-sync");
    answer = keyboard.question("Вы согласны? ");
    if (answer == "Да") {
      return true;
    }

    else if (answer === "Нет") {
      return false;
    }
  },

  function() {
    console.log("Вы согласились.");
  },

  function() {
    console.log("Вы отказались.");
  }
)
