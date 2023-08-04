import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './store';
import ProductList from './screens/ProductList';
import ProductDetails from './screens/ProductDetails';
import {Platform, StatusBar} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar backgroundColor="#0F0C0A" barStyle="light-content" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen
              name="ProductList"
              component={ProductList}
              options={{headerShown: false, title: 'Product List'}}
              initialParams={{beers: []}}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{
                headerShown: true,
                title: Platform.OS == 'ios' ? 'Details' : 'Product Details',
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#0F0C0A', borderBottomWidth: 0},
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
