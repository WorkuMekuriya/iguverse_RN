import React from 'react';
import {BackHandler, Modal, StyleSheet, View} from 'react-native';
import {CONSTANTS} from '../util';
import {Colors} from '../styles';

// prop initialization
export interface Props {
  navigation: any;
  modalVisible: boolean;
  onRequestClose: any;
  renderView: any;
  center: boolean;
  style: any;
}

// state initialization
interface State {}

export default class CustomModal extends React.Component<Props, State> {
  constructor(Props: any) {
    super(Props);
    this.state = {};
  }

  handleBackButtonClick = () => {
    return true;
  };

  async UNSAFE_componentWillMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => this.props.onRequestClose()}>
        <View style={[styles(this.props).centeredView]}>
          <View style={[styles(this.props).modalView, this.props.style]}>
            {this.props.renderView()}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = (props: any) => {
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: props.center ? 'center' : 'flex-end',
      backgroundColor: 'rgba(255,255,255,0.4)',
    },
    modalView: {
      alignSelf: 'center',
      borderRadius: CONSTANTS.radius,
      padding: 35,
      width: '100%',
      shadowColor: Colors.LightGrey,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: CONSTANTS.opacity,
      shadowRadius: CONSTANTS.shadowRadius,
      elevation: CONSTANTS.elevation,
    },
  });
};
