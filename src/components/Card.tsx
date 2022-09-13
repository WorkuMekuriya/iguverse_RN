import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomModal from './CustomModal';
import {CONSTANTS} from '../util';
import {Colors} from '../styles';

// prop initialization
export interface Props {
  cardViewContent?: any;
  height?: any;
  width?: any;
  style?: any;
  navigation?: any;
  modalVisible: boolean;
  onRequestClose?: any;
  successMessage: any;
}

// state initialization
interface State {}

// advance custom modal component
export default class Card extends React.Component<Props, State> {
  render() {
    return (
      <>
        <CustomModal
          navigation={this.props.navigation}
          modalVisible={this.props.modalVisible}
          onRequestClose={() => this.setState({modalVisible: false})}
          renderView={() => {
            return (
              <>
                <View
                  style={[
                    styles(this.props).border,
                    styles(this.props).topBorder,
                  ]}>
                  <View
                    style={[
                      styles(this.props).border,
                      styles(this.props).centralBorder,
                    ]}>
                    <View
                      style={[
                        styles(this.props).border,
                        styles(this.props).internalBorder,
                      ]}>
                      <Icon
                        name="exit-outline"
                        size={23}
                        color={Colors.White}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles(this.props).userInfo,
                    styles(this.props).card,
                    this.props.style,
                  ]}>
                  {this.props.cardViewContent === undefined ? (
                    <View style={{paddingTop: 10, width: '100%'}}>
                      <Text
                        allowFontScaling={false}
                        // @ts-ignore
                        style={styles(this.props).messageTitle}>
                        {this.props.successMessage.title}
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={styles(this.props).message}>
                        {this.props.successMessage.messages}
                      </Text>
                      <View style={styles(this.props).buttonContainer}>
                        {this.props.successMessage.buttons &&
                          this.props.successMessage.buttons.map(
                            (button: any) => {
                              return (
                                <TouchableOpacity
                                  onPress={() => button.onPress()}>
                                  <Text style={styles(this.props).buttonTitle}>
                                    {button.title}
                                  </Text>
                                </TouchableOpacity>
                              );
                            },
                          )}
                      </View>
                    </View>
                  ) : (
                    this.props.cardViewContent()
                  )}
                </View>
              </>
            );
          }}
          center={true}
          style={{}}
        />
      </>
    );
  }
}

const styles = (props: any) =>
  StyleSheet.create({
    userInfo: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 15,
      backgroundColor: 'white',
    },
    card: {
      height: props.height ? props.height : null,
      width: props.width ? props.width : '100%',
      borderColor: Colors.White,
      borderWidth: CONSTANTS.borderWidth,
      borderRadius: CONSTANTS.radius,
      padding: 10,
      paddingTop: 40,
      shadowColor: Colors.LightGrey,
      shadowOpacity: CONSTANTS.opacity,
      shadowRadius: CONSTANTS.shadowRadius,
      elevation: CONSTANTS.elevation,
    },
    border: {
      alignSelf: 'center',
      borderRadius: CONSTANTS.radius * 10,
      zIndex: 1,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    topBorder: {
      bottom: -43,
      width: 85,
      height: 85,
      backgroundColor: Colors.Black,
    },
    centralBorder: {
      width: 72,
      height: 72,
      backgroundColor: Colors.White,
    },
    internalBorder: {
      width: 47,
      height: 47,
      backgroundColor: Colors.Black,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    messageTitle: {
      textAlign: 'center',
      // @ts-ignore
      fontWeight: CONSTANTS.fontWeight,
      fontSize: 20,
      color: Colors.Black,
    },
    message: {
      textAlign: 'center',
      marginBottom: 15,
      fontSize: 14,
      color: Colors.Black,
    },
    buttonTitle: {
      color: Colors.Black,
      borderWidth: 0.5,
      borderRadius: 5,
      padding: 10,
    },
  });
