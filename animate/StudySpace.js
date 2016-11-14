import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import IdiotsLogo from './components/IdiotsLogo';

export default class StudySpace extends Component {
  render() {
    return (
      <View style={styles.container}>
          <IdiotsLogo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
