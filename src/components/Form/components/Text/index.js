import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

const TextField = ({value, newValue}) => {
  return (
    <View>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.inputField}
        multiline
        numberOfLines={4}
        value={value}
        onChangeText={newValue}
        placeholder=""
      />
    </View>
  );
};

export default TextField;
