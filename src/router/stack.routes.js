import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

const StackScreen = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Form');
  };
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
            <TouchableOpacity onPress={onPress}>
              <AntDesign name="pluscircle" size={25} color={'blue'} />
            </TouchableOpacity>
          ),
        }}
        name="Top"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
