/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated
} from 'react-native';

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

export default class eidiotsProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0)
    };
  }
  render() {
    return (
      <Animated.Image
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          transform: [
            {scale: this.state.bounceValue} //바운스를 스케일 변수로 지정
          ]
        }}
      />
    );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);    // Start large
    Animated.spring(              // 기본적으로 스프링 디케이 타이밍
      this.state.bounceValue,     // 바운스값 지정
      {
        toValue: 0.8,             // 작은사이즈 값 지정
        friction: 1               // 탄력 지정
      }
    ).start();                    // 애니메이션 시작
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('eidiotsProject', () => eidiotsProject);
