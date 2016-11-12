import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CustomComponent extends Component {
  render() {
    console.log("Booleans: ", this.props.booleans);
    return (
      <View style={styles.container}>
        <Text style={styles.attitude}>
            {this.props.message}
        </Text>
        <Text style={styles.attitude}>
            {this.props.objects.ObjectOne}
        </Text>
        <Text style={styles.attitude}>
            {this.props.arrays[1]}
        </Text>
        <Text style={styles.attitude}>
            {this.props.numbers}
        </Text>
        <Text style={styles.attitude}>
            {this.props.booleans}
        </Text>
      </View>
    );
  }
}

CustomComponent.propTypes = {
    message: React.PropTypes.string.isRequired,
    objects: React.PropTypes.object.isRequired,
    arrays: React.PropTypes.array.isRequired,
    numbers: React.PropTypes.number.isRequired,
    booleans: React.PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  attitude: {
    fontStyle: 'italic',
    fontFamily: 'Georgia',
    fontSize: 26,
    color: '#173e43'
  }
})
