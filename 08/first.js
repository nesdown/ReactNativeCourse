//Импортировали данные
import React, { Component } from 'react';
//AppRegistry импортируем всегда, а виджет Image ипортируем по надобности
import { AppRegistry, Image } from 'react-native';

//Создали компонент, это кирпичик из которого строим программу.
export default class Bananas extends Component {

  // Функция render - рисует виджеты на экране, нужна любому компоненту
  render() {
    let pic = {
      uri: 'https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SY355_.jpg'
    };

    // чтобы что-то нарисовать, надо поставить в return
    return (
      // если пишем виджет, то ставим угловые скобки
      <Image
        source={pic}
        style={
          {
            width: 593,
            height: 110
          }
        }
      />
    );
  }

}
