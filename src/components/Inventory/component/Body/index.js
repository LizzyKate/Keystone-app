import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Body = ({image}) => {
  console.log(image);
  return (
    <View>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

export default Body;
