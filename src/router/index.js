import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './bottom.routes';
import FormScreen from '../screens/FormScreen';

const Root = createStackNavigator();

const Route = () => {
  return (
    <Root.Navigator>
      <Root.Screen
        name="Root"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <Root.Screen name="Form" component={FormScreen} />
    </Root.Navigator>
  );
};

export default Route;
