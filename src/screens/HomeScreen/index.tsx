import {DataStore} from '@aws-amplify/datastore';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
//Component Imports
import ProductItem from '../../components/ProductItem/index';
//Dummy Data
// import products from '../../data/products';
import {Product} from '../../models';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const [products, setProduct] = useState<Product[]>([]);
  console.log(searchValue);

  useEffect(() => {
    //1
    DataStore.query(Product).then(setProduct);
    //2
    // const fetchProducts = async () => {
    //   const result = await DataStore.query(Product);
    //   console.log(result);
    //   setProduct(result);
    // };
    // fetchProducts();
  }, []);
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
