import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();
  const onPres = () => {
    console.warn('pressed');
    navigation.navigate('ProductDetails', {id: item.id});
  };
  return (
    <Pressable onPress={onPres} style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {item.title}
        </Text>
        <View style={styles.ratingsContainer}>
          {Array(5)
            .fill(null)
            .map((el, i) => (
              <FontAwesome
                //NOTE: halfStar?
                key={`${item.id}-${i}`}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
                style={styles.star}
              />
            ))}

          <Text>13,21</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price.toFixed(2)}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> {item.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
