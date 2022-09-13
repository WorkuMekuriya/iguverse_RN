import React, {Component} from 'react';
import {
  Animated,
  Image,
  PanResponder,
  PanResponderInstance,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CIRCLE_RADIUS, Window} from '../util';

// prop initialization
interface Props {
  color: string;
  imageURI: any;
}

// state initialization
interface State {
  dropZoneValues: any;
  pan: any;
}

// draggable custom component
export default class Draggable extends Component<Props, State> {
  private panResponder: PanResponderInstance;

  constructor(props: any) {
    super(props);
    this.state = {
      dropZoneValues: null,
      pan: new Animated.ValueXY(), // animation value setter
    };

    // change pan value from animation event emitter
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y,
        },
      ]),
    });
  }

  // set parent draggable layout value
  setDropZoneValues(event: any) {
    this.setState({
      dropZoneValues: event.nativeEvent.layout,
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View
          onLayout={this.setDropZoneValues.bind(this)}
          style={styles.dropZone}
        />
        {this.renderDraggable()}
      </View>
    );
  }

  // render animated view
  renderDraggable() {
    return (
      <View style={styles.draggableContainer}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[
            this.state.pan.getLayout(),
            styles.circle,
            {backgroundColor: this.props.color},
          ]}>
          <Image
            source={this.props.imageURI || require('../assets/default.jpg')}
            resizeMode="cover"
            style={styles.smallImage}
          />
          <View style={{width: '70%'}}>
            <View style={styles.sideSection}>
              <Text style={styles.title}>#QE9310</Text>
              <Image
                source={require('../assets/qr.png')}
                resizeMode="center"
                style={styles.qrCode}
              />
            </View>
            <Text style={styles.subtitle}>
              ❤ I play IguVerse and donate to Friends and Animals
            </Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dropZone: {
    backgroundColor: '#2c3e50',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 10,
  },
  draggableContainer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
  },
  smallImage: {
    margin: 10,
    width: '25%',
    height: '90%',
    borderRadius: 15,
  },
  sideSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qrCode: {
    width: '20%',
    position: 'absolute',
    right: 10,
    top: -30,
    height: 45,
  },
  circle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Window.width - 60,
    height: CIRCLE_RADIUS * 3.5,
    borderRadius: CIRCLE_RADIUS / 2,
  },
});
