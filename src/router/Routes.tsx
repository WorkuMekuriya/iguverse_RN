import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MAIN_ROUTES} from '../util';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function appNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'Main'}
      detachInactiveScreens
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={MAIN_ROUTES.HOME} component={Home} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return <NavigationContainer>{appNavigator()}</NavigationContainer>;
}
