import React from 'react';
import {render} from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {UnconnectedProductList as ProductList} from '../screens/ProductList/index';
import ConnectedProductList from '../screens/ProductList/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const mockStore = configureStore([]);
const RootStack = createStackNavigator();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

// Unit Test for ProductList
describe('ProductList Unit Test', () => {
  it('renders loading state correctly', () => {
    const {getByTestId} = render(
      <ProductList beers={[]} fetchBeers={jest.fn()} />,
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });
});

// Integration Test for ProductList
describe('ProductList Integration Test', () => {
  it('renders loading state correctly with store', () => {
    const store = mockStore({beers: {items: []}});

    const {getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name="ProductList"
              component={ConnectedProductList}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>,
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });
});
