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
  const [note, setNote] = useState('');
  const navigation = useNavigation();

  const handleSubmit = useCallback(async () => {
    if (!name && !price && !type && !note) {
      Alert.alert('Please fill in the required fields');
    } else {
      const inventory = {
        id: uuidv4(),
        name: name,
        purchasePrice: Number(price),
        type: type,
        description: note,
        photo:
          'https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg',
      };
      // console.log(data);
      data.push(inventory);
      try {
        await AsyncStorage.setItem('info', JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
      navigation.navigate('Home');
    }
  }, [name, price, type, note]);

  return (
    <View style={styles.container}>
      <View style={styles.navigate}>
        <TouchableOpacity>
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
      <TextField value={note} newValue={setNote} />
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Form;
