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
import SlidingBox from './animate/SlidingBox';
import Playground from './animate/Playground';
import StudySpace from './animate/StudySpace';
import SequenceAnim from './animate/components/Sequence';
import Timing from './animate/Timing';
import TimingMultiple from './animate/TimingMultiple';
import Spring from './animate/Spring';
import Parallel from './animate/Parallel';
import Sequence from './animate/Sequence';
import Stagger from './animate/Stagger';
import Namgon from './namgon';

export default class eidiotsProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'Namgon'
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
        case 'SlidingBox':
          return (<SlidingBox navigator={navigator} title='SlidingBox' />);
        case 'Playground':
          return (<Playground navigator={navigator} title='Playground' />);
        case 'StudySpace':
          return (<StudySpace navigator={navigator} title='StudySpace' />);
        case 'SequenceAnim':
          return (<SequenceAnim navigator={navigator} title='SequenceAnim' />);
        case 'Timing':
          return (<Timing navigator={navigator} title='Timing' />);
        case 'TimingMultiple':
          return (<TimingMultiple navigator={navigator} title='TimingMultiple' />);
        case 'Spring':
          return (<Spring navigator={navigator} title='Spring' />);
        case 'Parallel':
          return (<Parallel navigator={navigator} title='Parallel' />);
        case 'Sequence':
          return (<Sequence navigator={navigator} title='Sequence' />);
        case 'Namgon':
          return (<Namgon navigator={navigator} title='Namgon' />);
      }
  }
}

AppRegistry.registerComponent('eidiotsProject', () => eidiotsProject);
