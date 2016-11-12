import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';

import Animate from './app/Animate';
import Second from './app/Second';
import StateExplained from './app/StateExplained';
import State from './app/State';
import RNFetch from './app/RNFetch';
import SeungyeonPin from './app/SeungyeonPin';

export default class eidiotsProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'SeungyeonPin'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }
  navigatorRenderScene(route, navigator) {
      _navigator = navigator;
      switch (route.id) {
        case 'Animate':
          return (<Animate navigator={navigator} title='Animate' />);
        case 'Second':
          return (<Second navigator={navigator} title='Second' />);
        case 'StateExplained':
          return (<StateExplained navigator={navigator} title='StateExplained' />);
        case 'State':
          return (<State navigator={navigator} title='State' />);
        case 'RNFetch':
          return (<RNFetch navigator={navigator} title='RNFetch' />);
        case 'SeungyeonPin':
          return (<SeungyeonPin navigator={navigator} title='SeungyeonPin' />);
      }
  }
}

AppRegistry.registerComponent('eidiotsProject', () => eidiotsProject);
