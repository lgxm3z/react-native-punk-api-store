import React from 'react';
import {render} from '@testing-library/react-native';
import {SafeAreaView} from 'react-native';
import ProductDetails from '../screens/ProductDetails/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const mockItem = {
  id: 1,
  name: 'Buzz',
  tagline: 'A Real Bitter Experience.',
  first_brewed: '09/2007',
  description:
    'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 4.5,
  ibu: 60,
  target_fg: 1010,
  target_og: 1044,
  ebc: 20,
  srm: 10,
  ph: 4.4,
  attenuation_level: 75,
  volume: {value: 20, unit: 'litres'},
  boil_volume: {value: 25, unit: 'litres'},
  method: {
    mash_temp: [{temp: {value: 64, unit: 'celsius'}, duration: 75}],
    fermentation: {temp: {value: 19, unit: 'celsius'}},
    twist: null,
  },
  ingredients: {
    malt: [
      {name: 'Maris Otter Extra Pale', amount: {value: 3.3, unit: 'kilograms'}},
      {name: 'Caramalt', amount: {value: 0.2, unit: 'kilograms'}},
      {name: 'Munich', amount: {value: 0.4, unit: 'kilograms'}},
    ],
    hops: [
      {
        name: 'Fuggles',
        amount: {value: 25, unit: 'grams'},
        add: 'start',
        attribute: 'bitter',
      },
      {
        name: 'First Gold',
        amount: {value: 25, unit: 'grams'},
        add: 'start',
        attribute: 'bitter',
      },
      {
        name: 'Fuggles',
        amount: {value: 37.5, unit: 'grams'},
        add: 'middle',
        attribute: 'flavour',
      },
      {
        name: 'First Gold',
        amount: {value: 37.5, unit: 'grams'},
        add: 'middle',
        attribute: 'flavour',
      },
      {
        name: 'Cascade',
        amount: {value: 37.5, unit: 'grams'},
        add: 'end',
        attribute: 'flavour',
      },
    ],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: [
    'Spicy chicken tikka masala',
    'Grilled chicken quesadilla',
    'Caramel toffee cake',
  ],
  brewers_tips:
    'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
  contributed_by: 'Sam Mason <samjbmason>',
};

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: () => ({
    params: {item: mockItem},
  }),
}));

const RootStack = createStackNavigator();

// Unit Test for ProductDetails
describe('ProductDetails Unit Test', () => {
  it('renders product details correctly', () => {
    const {getByText} = render(
      <SafeAreaView>
        <ProductDetails />
      </SafeAreaView>,
    );

    expect(getByText('Product Name: Buzz')).toBeTruthy();
    expect(getByText('Product ABV: 4.5')).toBeTruthy();
    // Add other assertions as needed
  });
});

// Integration Test for ProductDetails
describe('ProductDetails Integration Test', () => {
  it('renders product details correctly with navigation', () => {
    const {getByText} = render(
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="ProductDetails" component={ProductDetails} />
        </RootStack.Navigator>
      </NavigationContainer>,
    );

    expect(getByText('Product Name: Buzz')).toBeTruthy();
    expect(getByText('Product ABV: 4.5')).toBeTruthy();
  });
});
