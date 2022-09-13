import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors} from '../styles';
import {COLOR_LIST} from '../util';

interface Props {
  setColor: any;
}

interface State {}

export default class Footer extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles(null).view} horizontal>
        {COLOR_LIST.map((color, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles(color).container}
              onPress={() => this.props.setColor(color)}>
              <View style={styles(color).button} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = (color: any) =>
  StyleSheet.create({
    view: {
      paddingVertical: 20,
      backgroundColor: Colors.LighterGrey,
    },
    container: {
      height: 45,
      width: 45,
      borderWidth: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: Colors.White,
      backgroundColor: Colors.White,
      borderRadius: 25,
      marginHorizontal: 7,
    },
    button: {
      height: 35,
      width: 35,
      borderWidth: 1,
      borderColor: Colors.White,
      backgroundColor: color,
      borderRadius: 25,
    },
  });
