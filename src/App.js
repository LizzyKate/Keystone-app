import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Route from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default App;
