import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import EidiotsLogo from './components/EidiotsLogo';

export default class StudySpace extends Component {
  render() {
    return (
      <View style={styles.container}>
          <EidiotsLogo />
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
