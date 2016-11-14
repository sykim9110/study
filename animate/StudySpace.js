import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated
} from 'react-native';

import IdiotsLogo from './components/IdiotsLogo';

export default class StudySpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }
  componentWillMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        delay: 50,
      }
    ).start();
  }
  render() {
    return (
      <Animated.View
        style={
          [
            styles.container,
            {
              opacity: this.state.fadeAnim,
              transform: [{
                translateY: this.state.fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [10, 0]
                })
              }]
            }
          ]
        }>
          <IdiotsLogo />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
