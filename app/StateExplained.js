import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class StateExplanined extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'Liquid',
      temperature: '84'
    }
  }
  detectPhase(temp) {
    if (temp < 32) {
      this.setState({
        phase: 'Solid'
      });
    } else if (temp < 212) {
      this.setState({
        phase: 'Gas'
      });
    } else {
      this.setState({
        phase: 'Liquid'
      });
    }
    this.setState({
      temperature: temp
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.smallText}>Explaining State: Phases of Water</Text>
        <Text style={styles.largeText}>{this.state.phase}</Text>
        <TextInput
          style={styles.input}
          keyboardType = 'numeric'
          onChageText={(temp) => this.detectPhase(temp)}
          value={this.state.temperature}
        />
        <Text style={styles.smallText}>Type in the Input above</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 20,
    color: '#2e2e31'
  },
  largeText: {
    fontSize: 25,
    color: '#2e2e31'
  },
  input: {
    height: 50,
    width: 50,
    marginTop: 30
  }
});
