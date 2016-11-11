import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Animated
} from 'react-native';

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    // Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

export default class eidiotsProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0)
    };
    this._handleOnpressSpring = this._handleOnpressSpring.bind(this);
    this._handleOnpressDecay = this._handleOnpressDecay.bind(this);
    this._handleOnpressComposing = this._handleOnpressComposing.bind(this);
  }
  _handleOnpressSpring() {
    this.state.bounceValue.setValue(2);    // Start large
    Animated.spring(              // 기본적으로 스프링 디케이 타이밍
      this.state.bounceValue,     // 바운스값 지정
      {
        toValue: 1,             // 작은사이즈 값 지정
        friction: 7,
        tension: 5             // 탄력 지정
      }
    ).start();
  }
  _handleOnpressDecay() {
    this.state.bounceValue.setValue(2);    // Start large
    Animated.decay(              // 기본적으로 spring decay timing
      this.state.bounceValue,     // 바운스값 지정
      {
        toValue: 0.5,             // 변환 사이즈 값 지정
        velocity: 0.05,                   // 속도 지정
        deceleration: 0.997            // decay 지정
      }
    ).start();
  }
  _handleOnpressComposing() {
    Animated.sequence([            // spring to start and twirl after decay finishes
      Animated.decay(position, {   // coast to a stop
        velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release
        deceleration: 0.997,
      }),
      Animated.parallel([          // after decay, in parallel:
        Animated.spring(position, {
          toValue: {x: 0, y: 0}    // return to start
        }),
        Animated.timing(twirl, {   // and twirl
          toValue: 360,
        }),
      ]),
    ]).start();                    // start the sequence group
  }
  render() {
    return (
      <View style={styles.container}>
          <Animated.Image
            source={require('./jasan1.png')}
            style={{
              transform: [
                {scale: this.state.bounceValue} //바운스를 스케일 변수로 지정
              ]
            }}
          />
          <Text
            style={{margin:20, fontSize: 20, color:'lightblue'}}
            onPress={this._handleOnpressSpring}>handleOnpressSpring
          </Text>
          <Text
            style={{margin:20, fontSize: 20, color:'lightblue'}}
            onPress={this._handleOnpressDecay}>handleOnpressDecay
          </Text>
          <Text
            style={{margin:20, fontSize: 20, color:'lightblue'}}
            onPress={this._handleOnpressComposing}>handleOnpressComposing
          </Text>
      </View>
    );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1);    // Start large
    Animated.spring(              // 기본적으로 스프링 디케이 타이밍
      this.state.bounceValue,     // 바운스값 지정
      {
        toValue: 0.7,             // 작은사이즈 값 지정
        friction: 7             // 탄력 지정
      }
    ).start();                    // 애니메이션 시작
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
  }
});

AppRegistry.registerComponent('eidiotsProject', () => eidiotsProject);
