import {Dimensions, Platform, StatusBar} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const CONSTANTS = {
  borderWidth: Platform.OS === 'ios' ? 1 : 0.5,
  fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
  borderRadius: 10,
  radius: 15,
  opacity: 0.5,
  elevation: 0,
  shadowRadius: 3.5,
};
const CIRCLE_RADIUS = 36;
const Window = Dimensions.get('window');
const DEFAULT_PADDING = 15;
const DEFAULT_BORDER_RADIUS = 15;
const DEFAULT_SPACING = 10;
const __SCREEN_HEIGHT = Dimensions.get('screen').height;
const __STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const COLOR_LIST = [
  '#9f78fb',
  '#ce7ce9',
  '#ff8574',
  '#7f92fe',
  '#36cb9c',
  '#ec848b',
  '#96c36b',
  '#ddbc70',
];
enum MAIN_ROUTES {
  HOME = 'Home',
}

export {
  CONSTANTS,
  CIRCLE_RADIUS,
  Window,
  DEFAULT_PADDING,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_SPACING,
  __SCREEN_HEIGHT,
  __STATUS_BAR_HEIGHT,
  MAIN_ROUTES,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  COLOR_LIST,
};
