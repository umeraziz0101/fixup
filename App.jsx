import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
