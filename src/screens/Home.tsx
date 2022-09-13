import React from 'react';
import {
  BackHandler,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Colors} from '../styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Draggable from '../components/Draggable';

interface Props {
  navigation: any;
}

interface State {
  imageURI: any;
  color: string;
}

export default class Home extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      color: Colors.DarkPurple,
      imageURI: undefined,
    };
  }

  handleBackButtonClick = () => {
    this.props.navigation.goBack();
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

  setBackgroundImage = (imageURI: any) => {
    this.setState({
      imageURI,
    });
  };

  changeColor = (color: string) => {
    this.setState({
      color,
    });
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground
            source={this.state.imageURI || require('../assets/default.jpg')}
            resizeMode="cover"
            style={styles.backgroundStyle}>
            <Header
              setImage={(imageURI: any) => this.setBackgroundImage(imageURI)}
            />
            <Draggable
              color={this.state.color}
              imageURI={this.state.imageURI}
            />
          </ImageBackground>
        </View>
        <Footer setColor={(color: string) => this.changeColor(color)} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    height: '90%',
  },
  backgroundStyle: {
    width: '100%',
    backgroundColor: Colors.LighterGrey,
    height: '100%',
  },
});
