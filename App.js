import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import MainTab from './src/navigators/MainTab';
import TopTabNav from './src/navigators/TopTabNav';

import Topic from './src/screens/Topic';
import Topic4 from './src/screens/Topic4';
import Topic5 from './src/screens/Topic5';
import Topic6 from './src/screens/Topic6';
import TopicScrollView from './src/screens/TopicScrollView';
import KeyboardView from './src/screens/KeyboardView';
import TopicDimensions from './src/screens/Dimensions';
import CustomFonts from './src/screens/CustomFonts';
import TopicSafeAreaView from './src/screens/TopicSafeAreaView';

const App = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};

export default App;
