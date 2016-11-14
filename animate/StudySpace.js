import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Easing
} from 'react-native';

import IdiotsLogo from './components/IdiotsLogo';
import DraggableView from './components/DraggableView';

export default class StudySpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        delay: 50,
        duration: 1000,
        esing: Easing.easeInBack
      }
    ).start();
  }
  render() {

    return (
      <DraggableView style={styles.container}>
        <Animated.View
          style={
                { opacity: this.state.fadeAnim,
                  transform: [
                    {translateY: this.state.fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [10, 0]
                    })},
                    {scale: this.state.fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0.8]
                    })},
                    // {rotate: this.state.fadeAnim.interpolate({
                    //     inputRange: [0, 1],
                    //     outputRange: ['0deg', '360deg']
                    // })}
                  ]
                }
          }>
            <IdiotsLogo />
        </Animated.View>
      </DraggableView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
