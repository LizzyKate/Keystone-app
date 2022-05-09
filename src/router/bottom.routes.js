import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import InventoryScreen from '../screens/InventoryScreen';
import ProductScreen from '../screens/ProductScreen';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import StackScreen from './stack.routes';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Foundation name="home" size={size} color={color} />;
          }
          if (route.name === 'Discovery') {
            return <Feather name="search" size={size} color={color} />;
          }
          if (route.name === 'Inventory') {
            return <Feather name="plus-square" size={size} color={color} />;
          }
          if (route.name === 'Product') {
            return <Feather name="search" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={StackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Inventory" component={InventoryScreen} />
      <Tab.Screen name="Product" component={ProductScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
