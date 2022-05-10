import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import Inventory from '../Inventory';
import data from '../../data/inventory.json';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Feed = () => {
  const [info, setInfo] = useState([]);

  const allItems = async () => {
    try {
      await AsyncStorage.getItem('info');
      const allInfo = await AsyncStorage.getItem('info');
      setInfo(allInfo);
    } catch (error) {
      console.log(error);
    }
  };

  // const removeItems = async () => {
  //   try {
  //     const keys = await AsyncStorage.getAllKeys();
  //     await AsyncStorage.multiRemove(keys);
  //   } catch (error) {}
  // };

  useEffect(() => {
    allItems();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          alignSelf: 'flex-start',
          justifyContent: 'space-between',
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>No Data</Text>
            </View>
          );
        }}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={info}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Inventory detail={item} />}
      />
      {/* <TouchableOpacity onPress={() => removeItems()}>
        <Text>Clear</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Feed;
