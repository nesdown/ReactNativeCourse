// Есть два типа, окторые контролируют компонент:
//props, а второй - state
// props отвечает за внешний вид,
// state - за функционал

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);

    this.state = {isShowingText: true};

    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if(!this.state.isShowingText) {
      return null;
    }

    return(
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love blinking' />
        <Blink text='Blinking is great' />
        <Blink text='Yeeeah' />
        <Blink text='I am still blinking' />
      </View>
    );
  }
}
