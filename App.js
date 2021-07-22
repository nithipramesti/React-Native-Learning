import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Topic from './src/screens/Topic';
import Topic4 from './src/screens/Topic4';
import Topic5 from './src/screens/Topic5';
import Topic6 from './src/screens/Topic6';
import TopicScrollView from './src/screens/TopicScrollView';
import KeyboardView from './src/screens/KeyboardView';
import TopicDimensions from './src/screens/Dimensions';

const App = () => {
  return (
    <View style={{marginTop: 80}}>
      <TopicDimensions />
    </View>
  );
};

export default App;
