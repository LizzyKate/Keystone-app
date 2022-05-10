import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles.js';

const InputField = ({label, placeholder, value, newValue}) => {
  // const [borderColor, setBorderColor] = useState('');
  // const [borderWidth, setBorderWidth] = useState(0);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCompletType="text"
        placeholder={placeholder}
        value={value}
        onChangeText={newValue}
        style={[styles.inputField]}
        // onFocus={() => {
        //   return setBorderColor('#0000FF'), setBorderWidth(1);
        // }}
      />
    </View>
  );
};

export default InputField;
