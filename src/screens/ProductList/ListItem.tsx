/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Beer from '../../interfaces/Beer';

const ListItem = React.memo(
  ({item, onPress}: {item: Beer; onPress: () => void}) => (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.listItemContainer}>
      {item.image_url != null ? (
        <Image
          resizeMethod="resize"
          resizeMode="contain"
          width={60}
          height={60}
          source={{uri: item.image_url}}
          style={styles.imageStyle}
        />
      ) : (
        <View
          style={{
            ...styles.imageStyle,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            selectable={false}
            style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            {item.name[0]}
          </Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.taglineText}>{item.tagline}</Text>
        <Text numberOfLines={3} style={styles.descriptionText}>
          {item.description}
        </Text>
        <View style={styles.additionalInfoContainer}>
          <Text style={styles.additionalInfoTextVol}>
            Vol: <Text style={styles.normalWeightText}>{item.abv}%</Text>
          </Text>
          <Text style={styles.additionalInfoTextIBU}>
            IBU: <Text style={styles.normalWeightText}>{item.ibu}</Text>
          </Text>
          <Text style={styles.additionalInfoTextEBC}>
            EBC: <Text style={styles.normalWeightText}>{item.ebc}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ),
);

export default memo(ListItem);
