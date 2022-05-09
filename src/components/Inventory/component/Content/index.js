import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Content = ({name, price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export default Content;
