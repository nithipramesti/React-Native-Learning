import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './src/navigators/MainTab';
import Login from './src/screens/Auth/Login';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './src/redux/reducers';
import AppNavigator from './src/navigators/AppNavigator';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
