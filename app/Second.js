import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import CustomComponent from './components/CustomComponent';

export default class Second extends Component {
  onButtonPress() {
    this.props.navigator.push({
      id: 'StateExplained'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>
            We are going to navigate to this component from Animate.js
            im Seungyeon
        </Text>
        <CustomComponent
          message="MESSAGE"
          objects={{
            ObjectOne : "Object One Value",
            ObjectTwo : "Object Two Value",
          }}
          arrays={["Array Index 0","Array Index 1","Array Index 2"]}
          numbers={10000}
          booleans={true}
         />
         <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
           <Text style={styles.naviButton}>
              Next 스테이트익스플레인
           </Text>
         </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddfd4'
  },
  largeText: {
    flex: 1,
    fontSize: 35,
    fontFamily: "HelveticaNeue-CondensedBold",
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    color: "#173e43"
  },
  naviButton: {
    fontSize: 20,
    color: '#421e21'
  }
});
