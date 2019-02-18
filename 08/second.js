import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

// Побочный компонент
class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

// Главный компонент
export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View>
      // Если сам написал компонент - то перед слешем пробел!
        <Greeting name='Peter' />
        <Greeting name='Jessica' />
        <Greeting name='Stephen' />
      </View>
    );
  }
}

AppRegistry.registerComponent('eight', () => LotsOfGreetings);
