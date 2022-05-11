import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import InputField from './components/Input';
import TextField from './components/Text';
import styles from './styles';
import data from '../../data/inventory.json';
import {v4 as uuidv4} from 'uuid';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Form = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [description, setdescription] = useState('');
  const navigation = useNavigation();

  const handleSubmit = useCallback(async () => {
    if (!name && !price && !type && !description) {
      Alert.alert('Please fill in the required fields');
    } else {
      const inventory = {
        id: uuidv4(),
        name: name,
        purchasePrice: Number(price),
        type: type,
        description: description,
        photo:
          'https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg',
      };

      try {
        let allInventory = await AsyncStorage.getItem('inventoryInfo');
        if (allInventory) {
          allInventory = JSON.parse(allInventory);
          allInventory.push(inventory);
          console.log(allInventory, 'allInventory');
          await AsyncStorage.setItem(
            'inventoryInfo',
            JSON.stringify(allInventory),
          );
        } else {
          data.push(inventory);
          await AsyncStorage.setItem('inventoryInfo', JSON.stringify(data));
        }
      } catch (error) {
        console.log(error);
      }
      navigation.navigate('Home');
    }
  }, [name, price, type, description]);

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.navigate}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
      </View>

      <InputField
        label={'Name'}
        placeholder={'Bracelet'}
        value={name}
        newValue={setName}
      />
      <InputField
        label={'Purchase price'}
        placeholder={'850'}
        value={price}
        newValue={setPrice}
      />
      <InputField
        label={'Type'}
        placeholder={'Jewellery'}
        value={type}
        newValue={setType}
      />
      <TextField value={description} newValue={setdescription} />
    </View>
  );
};

export default Form;
