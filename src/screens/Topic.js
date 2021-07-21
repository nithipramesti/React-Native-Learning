import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const WelcomeText = props => {
  return (
    <Text
      style={{textDecorationLine: 'underline', color: 'blue', marginTop: 20}}>
      {props.input}
    </Text>
  );
};

const styles = StyleSheet.create({
  bodyStyle: {
    marginHorizontal: 20,
    marginTop: 80,
  },

  textHeading: {
    fontSize: 35,
    marginBottom: 10,
  },

  highlight: {
    backgroundColor: 'yellow',
  },

  box1: {
    height: 30,
    width: 30,
    backgroundColor: 'black',
  },
});

const Topic = () => {
  return (
    <View
      style={{...styles.bodyStyle, flexDirection: 'row', alignItems: 'center'}}>
      {/* <Text style={styles.textHeading}>
        Hello <Text style={{fontWeight: 'bold'}}>world</Text>!
      </Text>
      <Text>
        Because <Text style={styles.highlight}>React Native</Text> uses the same
        API structure as React components, you’ll need to understand React
        component APIs to get started. The next section makes for a quick
        introduction or refresher on the topic. However, if you’re already
        familiar with React, feel free to skip ahead.
      </Text>
      <WelcomeText input="Clik here for details" /> */}

      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
    </View>
  );
};

export default Topic;
