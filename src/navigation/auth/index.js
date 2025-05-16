import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateAccount, Login, SetUpProfile} from '../../screens/auth';
import {routes} from '../../services';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={routes.login} component={Login} />
      <AuthStack.Screen name={routes.createAccount} component={CreateAccount} />
      <AuthStack.Screen name={routes.setUpProfile} component={SetUpProfile} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
