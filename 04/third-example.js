// function showMessage
// showMessageContentHello - верблюжий
// show_message_content_hello - змеиный

// function showMessage() {
//   for(let i = 0; i < 15; i++) {
//     console.log("Hello World");
//   }
// }
//
// showMessage();
//
// function showNamedMessage(name) {
//   console.log("Hello " + name);
// }
//
// showNamedMessage("Bohdan");

// function showChangedMessage(name) {
//   name = "Peter";
//   return(name);
// }
//
// console.log(showChangedMessage("Bohdan"));

// function showMessage(name="Неизвестный") {
//   console.log("Привет " + name + "!");
// }
//
// showMessage();

function checkAge(age) {
  if (age >= 18) {
    return("Доступ разрешен!");
  }

  else {
    return;
  }
}

console.log(checkAge(15));
