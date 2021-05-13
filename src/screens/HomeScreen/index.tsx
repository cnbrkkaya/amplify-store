import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
//Component Imports
import ProductItem from '../../components/ProductItem/index';
//Dummy Data
import products from '../../data/products';
const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log(searchValue);
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        //Not necessary bec def key is id
        //keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
