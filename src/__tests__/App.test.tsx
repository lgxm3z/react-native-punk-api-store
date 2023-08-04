/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '../store';
import App from '../App';

afterEach(cleanup);

it('renders correctly', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});
