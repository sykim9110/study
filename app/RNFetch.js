import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import api from './api';

export default class RNFetch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rovers: [],
      roverName: '',
      roverDate: '',
      roverExplanation: '',
    };
  }

  componentWillMount() {
    api.getRovers().then((res) => {
      this.setState({
        rovers: res.rovers,
        roverName: res.copyright,
        roverDate: res.date,
        roverExplanation: res.explanation,
      });
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Rovers!
        </Text>
        <Text style={styles.instructions}>
          Rover: {this.state.roverName} {'\n'}
          date: {this.state.roverDate} {'\n'}
          roverExplanation: {this.state.roverExplanation}
        </Text>
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
  },
});
