import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Inventory',
          headerTitleAlign: 'left',
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerRight: () => (
            <AntDesign name="pluscircle" size={25} color={'blue'} />
          ),
        }}
        name="Top"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
