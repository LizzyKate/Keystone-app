import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import Inventory from '../Inventory';
import data from '../../data/inventory.json';
import styles from './styles';

const Feed = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          alignSelf: 'flex-start',
          justifyContent: 'space-between',
        }}
        scrollEnabled={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Inventory detail={item} />}
      />
    </View>
  );
};

export default Feed;
