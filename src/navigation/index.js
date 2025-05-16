import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './auth';
import AppNavigation from './app';
import {routes} from '../services';
import {navigationRef} from './rootNavigation';

const NavigationStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <NavigationStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={routes.auth}>
        <NavigationStack.Screen name={routes.auth} component={AuthNavigation} />
        <NavigationStack.Screen name={routes.app} component={AppNavigation} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
