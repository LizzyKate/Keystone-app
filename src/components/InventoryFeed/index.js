import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import Inventory from '../Inventory';
import data from '../../data/inventory.json';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const Feed = () => {
  const [info, setInfo] = useState(data);

  const isFocused = useIsFocused();

  const allItems = async () => {
    try {
      await AsyncStorage.getItem('info');
      const allInventoryInfo = await AsyncStorage.getItem('inventoryInfo');
      if (allInventoryInfo) {
        setInfo(JSON.parse(allInventoryInfo));
      } else {
        setInfo(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    allItems();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          alignSelf: 'center',
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
