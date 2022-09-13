import React from 'react';
import {
  Alert,
  BackHandler,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import BackArrow from 'react-native-vector-icons/Ionicons';
import FilePicker from 'react-native-vector-icons/Feather';
import {Colors} from '../styles';
import {launchImageLibrary} from 'react-native-image-picker';
import Card from './Card';

// prop initialization
interface Props {
  setImage: any;
}

// state initialization
interface State {
  imageURI: any;
  color: string;
  exitApp: boolean;
}

// check storage permission
const requestExternalWritePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      Alert.alert('Error', 'Write permission err' + err);
    }
    return false;
  } else {
    return true;
  }
};

// check camera permission if needed
const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      return false;
    }
  }
  return true;
};

export default class Header extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      imageURI: undefined,
      color: Colors.LightPurple,
      exitApp: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Card
          modalVisible={this.state.exitApp}
          successMessage={{
            title: 'Exit!',
            buttons: [
              {
                title: 'Cancel',
                onPress: () => this.setState({exitApp: false}),
              },
              {
                title: 'Exit',
                onPress: () => {
                  BackHandler.exitApp();
                  this.setState({exitApp: false});
                },
              },
            ],
            messages: 'Do you really want to exit?',
          }}
        />
        <TouchableOpacity onPress={this.exitApp}>
          <BackArrow name="arrow-back-circle" size={35} color={Colors.White} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openMedia} style={styles.filePicker}>
          <FilePicker name="upload" size={20} color={Colors.Black} />
        </TouchableOpacity>
      </View>
    );
  }

  exitApp = () => {
    // change modal visibility for android only
    this.setState({exitApp: Platform.OS === 'android'});
  };

  openMedia = async () => {
    // image library property
    let options = {
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    // access permission check
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();

    if (isCameraPermitted && isStoragePermitted) {
      // @ts-ignore
      // open media library and pick file
      await launchImageLibrary(options, (response: any) => {
        if (response.didCancel) {
          Alert.alert('Cancelled', 'User cancelled camera picker');
          return;
        } else if (response.errorCode === 'camera_unavailable') {
          Alert.alert('Device Error', 'Camera not available on device');
          return;
        } else if (response.errorCode === 'permission') {
          Alert.alert('Permission Error', 'Permission not satisfied');
          return;
        } else if (response.errorCode === 'others') {
          Alert.alert('Error', response.errorMessage);
          return;
        }
        // return value for parent image viewer component
        this.props.setImage({uri: response.assets[0].uri});
        return;
      });
    }
  };
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingTop: 45,
    paddingHorizontal: 30,
  },
  filePicker: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    height: 35,
    backgroundColor: Colors.White,
  },
});
