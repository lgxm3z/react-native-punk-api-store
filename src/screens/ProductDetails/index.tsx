/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, SafeAreaView, Image, View} from 'react-native';

import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import RootStackParamList from '../../interfaces/RootStackParamList';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

const ProductDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>();

  const item = route.params?.item;

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{padding: 20}}>
        {item?.image_url ? (
          <Image
            source={{uri: item?.image_url}}
            width={190}
            height={190}
            resizeMode="contain"
            resizeMethod="resize"
            style={styles.image}
          />
        ) : (
          <View style={styles.noImageContainer}>
            <Text selectable={false} style={styles.noImageText}>
              {item.name[0]}
            </Text>
          </View>
        )}
        <Text>Product Name: {item?.name}</Text>
        <Text>Product Description: {item?.description}</Text>
        <Text>Product Tagline: {item?.tagline}</Text>
        <Text>Product First Brewed: {item?.first_brewed}</Text>
        <Text>Product ABV: {item?.abv}</Text>
        <Text>Product IBU: {item?.ibu}</Text>
        <Text>Product Target FG: {item?.target_fg}</Text>
        <Text>Product Target OG: {item?.target_og}</Text>
        <Text>Product EBC: {item?.ebc}</Text>
        <Text>Product SRM: {item?.srm}</Text>
        <Text>Product PH: {item?.ph}</Text>
        <Text>Product Attenuation Level: {item?.attenuation_level}</Text>
        <Text>Product Volume: {item?.volume?.value}</Text>
        <Text>Product Boil Volume: {item?.boil_volume?.value}</Text>
        <Text>
          Product Method Mash Temp: {item?.method?.mash_temp[0]?.temp?.value}
        </Text>
        <Text>
          Product Method Mash Temp Unit:{' '}
          {item?.method?.mash_temp[0]?.temp?.unit}
        </Text>
        <Text>
          Product Method Mash Temp Duration:{' '}
          {item?.method?.mash_temp[0]?.duration}
        </Text>
        <Text>
          Product Method Fermentation Temp:{' '}
          {item?.method?.fermentation?.temp?.value}
        </Text>
        <Text>
          Product Method Fermentation Temp Unit:{' '}
          {item?.method?.fermentation?.temp?.unit}
        </Text>
        <Text>Product Method Twist: {item?.method?.twist}</Text>
        <Text>
          Product Ingredients Malt Name: {item?.ingredients?.malt[0]?.name}
        </Text>
        <Text>
          Product Ingredients Malt Amount:{' '}
          {item?.ingredients?.malt[0]?.amount?.value}
        </Text>
        <Text>
          Product Ingredients Hops Name: {item?.ingredients?.hops[0]?.name}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
