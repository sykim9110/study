import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Animated
} from 'react-native';

import Animate from './app/Animate';

export default class eidiotsProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Animate />
    );
  }
}

AppRegistry.registerComponent('eidiotsProject', () => eidiotsProject);
