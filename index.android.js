/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
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
  render() {
    return (
      <View style={styles.container}>
          <Svg
              height="200"
              width="200"
          >
            <Ellipse
                fill="#b7b0cc"
                cx="35"
                cy="35.5"
                rx="35"
                ry="35.5"
            />
            <Ellipse
                fill="#5e5a6b"
                cx="22.5"
                cy="27.5"
                rx="3.5"
                ry="4.5"
            />
            <Ellipse
                fill="#5e5a6b"
                cx="47.5"
                cy="27.5"
                rx="3.5"
                ry="4.5"
            />
            <Ellipse
                fill="#b7b0cc"
                cx="23"
                cy="29"
                rx="2"
                ry="3"
            />
            <Ellipse
                fill="#b7b0cc"
                cx="48"
                cy="29"
                rx="2"
                ry="3"
            />
            <Ellipse
                fill="#6a667c"
                cx="35"
                cy="54.5"
                rx="14"
                ry="8.5"
            />
          </Svg>
      </View>
    );
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
