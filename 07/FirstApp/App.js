// Подключаем модуль-фреймворк "реакт"
import React from 'react';
// Подключаем компоненты из реакт-нейтив
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      // Видим угловые скобки - знаем что это JSX
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Создать новый проект
// Запустить проект на телефоне
// Поиграться с кодом App.js
// Изменить внешний вид приложения
