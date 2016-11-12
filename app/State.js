import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Playing with State"
    }
  }
  render() {
    return (

      <View stlye={styles.container}>
        <Text style={styles.largeText}>Using State</Text>
        <Text style={styles.largeText}>{this.state.text}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
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
    backgroundColor: '#DDDFD4'
  },
  largeText: {
    fontSize: 50,
    color: '#173E43'
  },
  smallText: {
    fontSize: 26,
    color: '#173E43'
  },
  input: {
    height: 40,
    borderColor: '#173E43',
    borderWidth: 2,
    textAlign: 'center'
  }
});
