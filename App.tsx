import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import Routes from './src/router/Routes';

type MyProps = {};
type MyState = {};

export default class App extends React.Component<MyProps, MyState> {
  state: MyState = {};

  constructor(props: any) {
    super(props);
  }

  render() {
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();
    return (
      <>
        <StatusBar
          backgroundColor={'transparent'}
          translucent
          barStyle={'light-content'}
        />
        <Routes />
      </>
    );
  }
}
