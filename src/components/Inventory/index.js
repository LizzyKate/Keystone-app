import React from 'react';
import {View, Text} from 'react-native';
import Body from './component/Body';
import Content from './component/Content';
import styles from './styles';

const Inventory = ({detail}) => {
  return (
    <>
      <View style={styles.container} key={detail.id}>
        <Body image={detail.photo} />
        <Content name={detail.name} price={detail.purchasePrice} />
      </View>
    </>
  );
};

export default Inventory;
